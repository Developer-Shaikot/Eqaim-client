import React from 'react';
import NoteAltTwoToneIcon from '@mui/icons-material/NoteAltTwoTone';
import Navbar from '../Navbar/Navbar';
import './Home.css'
import { Link } from "react-router-dom";
import Blogpost from '../Blogpost/Blogpost';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="addpost_float">
                <Link className='icon' to="/blog">
                    <NoteAltTwoToneIcon sx={{ fontSize: "47px" }} className="whatsapp_float_btn dot" />
                </Link>
            </div>
            <div className='container ml-5'>
                <Blogpost />
            </div>

        </div>
    );
};

export default Home;