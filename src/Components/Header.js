import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container">
                    <Link class="navbar-brand" to='/' >
                        <img className='rounded' src="https://i.pinimg.com/originals/b6/1a/f8/b61af864c36a87b34acf068c213b8df5.jpg" alt="" width="100" />
                    </Link>
                    <div>
                        <p className='fs-5'>Paid: 0</p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;