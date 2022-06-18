import React from 'react';

const Reason = ({ reason }) => {
    const { heading, text } = reason
    return (
        <div class="card" >
            <div class="card-body">
                <h5 class="card-title">{heading}</h5>
                <p class="card-text">{text}</p>

            </div>
        </div>
    );
};

export default Reason;