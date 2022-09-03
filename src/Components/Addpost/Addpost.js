import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar/Navbar';
import { Editor } from '@tinymce/tinymce-react';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import RoofingIcon from '@mui/icons-material/Roofing';
import { Link } from "react-router-dom";
import './Adpost.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const Addpost = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = data => {
        const blogsData = {
            title: data.title,
            date: data.date,
            content: data.content,

        }
        // console.log(blogsData);

        const url = `http://localhost:5055/addPosts`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(blogsData)
        })
            // .then(res => console.log('server side responded', res))
            .then(
                function (response) {
                    //console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                    alert('Post uploaded successfully!');
                    window.location.reload();
                },
                function (error) {
                    //console.log("FAILED", error);
                    alert('FAILED!' + error);
                }
            );
    };


    return (
        <div>
            <Navbar />

            <div className="Home_float">
                <Link className='icon' to="/">
                    <RoofingIcon sx={{ fontSize: "45px" }} className="Home_float_btn dot" />
                </Link>
            </div>

            <div className="publish_float">
                <Link className='icon' to="/blog">
                    <AssignmentTurnedInIcon sx={{ fontSize: "45px" }} className="publish_float_btn dot" />
                </Link>
            </div>

            <form className='container ml-5 p-5 ' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Title</label>
                <input className="form-control mt-1" placeholder="Title of your content"{...register("title")} />

                {errors.message && <span className="error">Name is required</span>}
                <br />

                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                   
                />



                {/* <label htmlFor="">Date</label>
                <input className="form-control mt-1" placeholder="dd/mm/yy" {...register("date")} />

                {errors.message && <span className="error">Date is required</span>}
                <br />


                <label className="pra">Content</label>
                <textarea placeholder="Write your content...." {...register("content", { required: true })} className="form-control" name='content' rows="5" id="content" />

                {errors.message && <span className="error">Description is required</span>}
                <br /> */}



                <input className="btn-dark m-3" type="submit" />

                <p style={{ color: 'red' }}>{watch.error}</p>
                {watch.success && <p style={{ color: 'green' }}>User successfully</p>}

            </form>

        </div>
    );
};

export default Addpost;