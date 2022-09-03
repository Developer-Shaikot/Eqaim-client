import React from 'react';
import RoofingIcon from '@mui/icons-material/Roofing';
import { Link } from "react-router-dom";

const SingleBlogData = (props) => {



    const { title, content } = props.blog

    return (
        <div>


            <div className="Home_float">
                <Link className='icon' to="/">
                    <RoofingIcon sx={{ fontSize: "45px" }} className="Home_float_btn dot" />
                </Link>
            </div>
            <div className="d-flex justify-content-center m-5" >
                <div class=" w-75">
                    <div class="-body">
                        <h2 class="-title">{title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: content }}></p>
                        <div className="d-flex justify-content-end text-primary">
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleBlogData;