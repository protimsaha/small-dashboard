import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PayContext } from './BillModal';

const Header = () => {
    const pvalue = useContext(PayContext)
    console.log(pvalue)

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container">
                    <Link class="navbar-brand" to='/' >
                        <img className='rounded' src="https://i.pinimg.com/originals/b6/1a/f8/b61af864c36a87b34acf068c213b8df5.jpg" alt="" width="100" />
                    </Link>
                    <div className='d-flex '>
                        <p className='fs-5 mt-2'>Paid: {pvalue}</p>
                        <Link to='/login'><button className='btn btn-info mx-3'>Login</button></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;