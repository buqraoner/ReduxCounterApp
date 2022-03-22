import { createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
        incrementByAmount: (state, action) => {
            state.value += Number(action.payload);
        },
        multiplyByAmount:(state,action) =>{
            state.value *= Number(action.payload);
        },

    },
});

export const { increment, decrement, reset, incrementByAmount,multiplyByAmount } = counterSlice.actions;
export default counterSlice.reducer;