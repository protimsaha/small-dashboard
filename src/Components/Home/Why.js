import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Reason from './Reason';
import './Why.css'

const Why = () => {
    const [reasons, setReasons] = useState([])
    useEffect(() => {
        fetch('Why.json')
            .then(res => res.json())
            .then(data => setReasons(data))
    }, [])

    return (
        <div >
            <h2 className='text-center w-text'>Why Participate in <span className='ai'>AI Challenges?</span></h2>
            {
                reasons.map(reason => <Reason key={reason.id} reason={reason}></Reason>)
            }
        </div>
    );
};

export default Why;