import React, { useEffect, useState } from 'react';
import Break from '../Break/Braek';
import './Cart.css'
import { addToDb, savedGymCart } from '../../Utilities/FakeDB';

const Cart = ({cart}) => {
    const [savedBreaktime, setSavedbreaktime]  = useState(0)
    let total = 0
    for (const product of cart) {
        total = total + product.time
    }
    const clickedBtn = (breakTime) => { 
        addToDb(breakTime.btn)
        setSavedbreaktime(breakTime.btn)
    }

    useEffect(() => {
        const savedData = savedGymCart()
        for (const key in savedData) {
            setSavedbreaktime(key)
        }
    }, []);
    return (
        <div>
            <div>
                <h2 className='break'>Add A Break</h2>
                 <Break clickedBtn={ clickedBtn}></Break>
            </div>
            <div>
                <h2 className='details'>Exercise Details</h2>

                <h5 className='menu-timer'>Exercise time : {total}</h5>
                <h5 className='menu-timer2'>Break time :{savedBreaktime}</h5>

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