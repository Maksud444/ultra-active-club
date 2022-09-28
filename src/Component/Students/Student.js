import React, { useEffect, useState } from 'react';
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
               </div>
            </div>
        </div>
    );
};

export default Student;