import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import SingleBlogData from './SingleBlogData';



const SingleBlog = () => {

    const { id } = useParams();
    const [blog, setBlog] = useState([])


    useEffect(() => {
        const url = `http://localhost:5055/addPost/${id}`;
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data[0]))
            .then(data => setBlog(data[0]))
            ;
    }, [id])


    return (
        <div className="back">
            <Navbar></Navbar>
            <div className="row">
            
            <div className="container">
            {
                blog.length === 0 && <div className="container text-white">...Loading</div>
            }

                <SingleBlogData blog={blog}>

                </SingleBlogData>

            </div>
           
        </div>
        
        </div>
    );
};

export default SingleBlog;