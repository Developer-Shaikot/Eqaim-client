import React from 'react';
import './BlogDetails.css'

const BlogsDetail = (props) => {

    const { title, date, content,_id } = props.post;

    return (
        <div>
            <div class="container">

                <div >

                    <div class="col m-4">
                        <div className="card" onClick={() => {window.location.href=`/singleblog/${_id}`}} >
                            <div class="card-body">
                                <h5 class="card-title">{title}</h5>
                                <small class="card-title text-secondary">{date}</small>
                                <p class="card-text">To view Content click to bellow view button.</p>
                               
                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogsDetail;