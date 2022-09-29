import React, { useEffect, useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {
  
    const [breakTime,setBreakTime] = useState([])
    let total = 0
    for (const product of cart) {
        total = total + product.time
    }
  const handlerBtn = ({time})=>{
   
  }
    return (
        <div>
            <div>
                <h2 className='break'>Add A Break</h2>
                <div className='btn-timer'>
                    <button >10s</button>
                    <button >20s</button>
                    <button >30s</button>
                    <button >40s</button>
                </div>
            </div>
            <div>
                <h2 className='details'>Exercise Details</h2>

                <h5 className='menu-timer'>Exercise time : {total}</h5>
                <h5 className='menu-timer2'>Break time :{breakTime.value}</h5>

            </div>
            <p></p>
            <div >
                <button className='button'>
                    <p>Activity Completed</p>
                </button>
            </div>
        </div>
    );
};

export default Cart;