import React from 'react';
import './Review.css'
import model from '../../assets/icons/Group 1000002516.svg'
import model1 from '../../assets/icons/Group 1000002515.svg'
import model2 from '../../assets/icons/Group 1000002518.svg'

const Review = () => {
    return (
        <div className='container-fluid review'>
            <div className='d-flex justify-content-around'>
                <div className='d-flex align-items-center'>
                    <img className='r-pic' src={model1} alt="" />
                    <div className='text-white fw-bold'>
                        <h3>100k+</h3>
                        <h4>AI Model Submissions</h4>
                    </div>
                    <div className='v-l'></div>
                </div>
                <div className='d-flex align-items-center'>
                    <img className='r-pic' src={model} alt="" />
                    <div className='text-white fw-bold'>
                        <h3>50k+</h3>
                        <h4>Data Scientists</h4>
                    </div>
                    <div className='v-l'></div>
                </div>
                <div className='d-flex align-items-center'>
                    <img className='r-pic' src={model2} alt="" />
                    <div className='text-white fw-bold'>
                        <h3>100k+</h3>
                        <h4>AI Challenges Hosted</h4>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;
