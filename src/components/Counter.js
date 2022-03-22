import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount,multiplyByAmount} from "../redux/counter/counterSlice"




function Counter() {
    const [amount, setAmount] = useState();
    const countValue = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    





    return (
        <div className='bugo'>
            <h1>
                {countValue}
            </h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>   
            <br />
            <button onClick={() => dispatch(reset())}>Reset</button>
            <br />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <br />



            <button onClick={() => dispatch(incrementByAmount(amount))}>Increment By Amount</button>
            <button onClick={() => dispatch(multiplyByAmount(amount))}>Multiply By Amount</button>

            

        </div>
    );
};

export default Counter;