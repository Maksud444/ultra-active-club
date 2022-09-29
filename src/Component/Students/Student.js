import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleStudent from '../Single-Student/SingleStudent';
import './Student.css'

const Student = () => {
    const [student,setStudent] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setStudent(data))
    },[])
    return (
        <div className='student-container'>
           <div className='singleStudent-container'>
          {
            student.map(singleStudent => <SingleStudent
            key={singleStudent.id}
            singleStudent={singleStudent}
            ></SingleStudent>)
          }
            </div> 
            <div className='cart-container'>
               <div className='my-self'>
                <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b6a323722d2d61241769d14604e97b39-1618479898751/5f592006-a06a-42bf-bb0a-4bcd904e19c7.jpg" alt="" />
                <h3>Maksud Billah</h3>
               </div>
               <div className='my-about'>
               <div className='my-age'>
               <h3>75 <span>kg</span></h3>
                <h3>5.6</h3>
                <h3>25 <span>yr</span></h3>
               </div>
               <div className='my-weight'>
                    <p>Weight</p>
                    <p>Height</p>
                    <p>Age</p>
                </div>
               </div>
               <Cart></Cart>
            </div>
            <div className='question'>
                <h4>question 1: how does react works ?</h4>
                <h4>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</h4>
                <br />
                <h4>question 2: what's the difference between props and state in react?</h4>
                <h4>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</h4>
                <br />
                <h4>question 3: What else does it take to load useEffect data?</h4>
                <h4>Ans: If we're using hooks in React function components, we can load data from an API when the component first loads by using the useEffect hook ...</h4>
            </div>
        </div>
        
    );
};

export default Student;