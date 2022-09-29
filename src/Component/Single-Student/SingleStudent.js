import React from 'react';
import './Single-Student.css'

const SingleStudent = ({ singleStudent, handleClick }) => {
    const {picture,name,age,time} = singleStudent;
    return (
       <div className='student'>
        <img src={picture} alt="" />
        <div className='student-info'>
        <p className='student-name'>{name}</p>
        <p>Amet minim mollit non deserunt 
         ullamco est sit aliqua dolor do 
        amet sint</p>
        <p >For Age :{age}</p>
        <p>Time required : {time}m</p> 
       </div> 
       <button onClick={()=> handleClick(singleStudent)} className='btn-cart'>
        <p>Add To Cart</p>
       </button>
       </div>
    );
};

export default SingleStudent;