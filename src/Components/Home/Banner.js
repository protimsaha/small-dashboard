import React from 'react';
import './Banner.css'
import rocket from '../../assets/icons/PicsArt_04-14-04.42 1.svg'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='d-flex b-header'>
                            <div className='b-border'></div>
                            <h1 className='text-white'>Accelerate Innovation with Global AI Challenges</h1>
                        </div>
                        <p className='text-white fs-5 b-text'>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
                        <button className='c-btn'>Create Challenge</button>
                    </div>
                    <div className='col-6 d-flex justify-content-center align-items-center'>
                        <img className='  b-pic' src={rocket} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;