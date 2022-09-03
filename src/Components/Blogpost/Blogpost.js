import React, { useEffect, useState } from 'react';
import BlogsDetail from './Blogdetail';



const Blogpost = () => {


    const [post, setPosts] = useState([])


    useEffect(() => {
        fetch('http://localhost:5055/addPosts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>

            <br />
            <p className="container">

            </p>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 rounded-3">
                    {
                        post.length === 0 && <div className="pra container text-black">...Loading</div>
                    }

                    {

                        post.map(post => <BlogsDetail

                            post={post} >

                        </BlogsDetail>)
                    }


                </div>
            </div>

        </div>
    );
};

export default Blogpost;