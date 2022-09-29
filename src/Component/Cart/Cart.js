import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <div>
                <h2 className='break'>Add A Break</h2>
                <div className='btn-timer'>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
            </div>
            <div>
                <h2 className='details'>Exercise Details</h2>

                <h5 className='menu-timer'>Exercise time : {}</h5>
                <h5 className='menu-timer2'>Break time :</h5>

            </div>
            <p></p>
            <div >
                <button className='button'>
                    <p>Complete</p>
                </button>
            </div>
        </div>
    );
};

export default Cart;