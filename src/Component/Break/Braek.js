import React from 'react';
import './Break.css'

const Break = ({ clickedBtn }) => {
    const buttons = [10, 20, 30, 40, 50]
    return (
        <div className='break-container'>
            {buttons.map(btn => <button onClick={() => clickedBtn({ btn })}>{btn}</button>)}
        </div>
    );
};

export default Break;