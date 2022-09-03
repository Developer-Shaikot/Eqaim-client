import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand " style={{
                        fontfamily: 'Myriad Pro Regular',
                        marginLeft: '8%',
                        color: "black",
                    }} href="/">
                        <b>Eqaim Blog </b>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;