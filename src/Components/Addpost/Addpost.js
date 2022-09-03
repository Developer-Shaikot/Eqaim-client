import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar/Navbar';
import JoditEditor from "jodit-react";

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import RoofingIcon from '@mui/icons-material/Roofing';
import { Link } from "react-router-dom";
import './Adpost.css'



const Addpost = () => {

    const editor = useRef(null);
    const [content, setContent] = useState("");
    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        placeholder: "Start typings...",
    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = data => {
        const blogsData = {
            title: data.title,
            content: content,


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

            {/* <div className="publish_float">
                <Link className='icon' to="/blog">
                    <AssignmentTurnedInIcon sx={{ fontSize: "45px" }} className="publish_float_btn dot" />
                </Link>
            </div> */}

            <form className='container ml-5 p-5 ' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Title</label>
                <input className="form-control mt-1" placeholder="Title of your content"{...register("title")} />

                {errors.message && <span className="error">Name is required</span>}
                <br />



                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={2}
                    onBlur={(newContent) => setContent(newContent)}
                />

                <input className="btn-dark m-3" type="submit" />

                <p style={{ color: 'red' }}>{watch.error}</p>
                {watch.success && <p style={{ color: 'green' }}>User successfully</p>}

            </form>

        </div>
    );
};

export default Addpost;