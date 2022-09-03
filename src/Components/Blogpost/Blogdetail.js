import React from 'react';
import './BlogDetails.css'

const BlogsDetail = (props) => {

    const { title, date, content, _id } = props.post;

    return (
        <div>
            <div className="container">

                <div >

                    <div class="col m-4">
                        <div className="card" onClick={() => { window.location.href = `/singleblog/${_id}` }} >
                            <div class="card-body">
                                <h5 class="card-title">{title}</h5>
                                <p class="card-text">To view Content click the card.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogsDetail;