import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <Link to='/' class="navbar-brand" >
                    <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
                </Link>
            </div>
        </nav>
    );
};

export default Header;