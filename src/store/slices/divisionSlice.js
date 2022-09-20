

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// https://api.football.kg/api/v1/tables/chess/

export const fetchDivision = createAsyncThunk(
    'division/fetchDivision',
    async (id) => {
        const res = await fetch(`https://api.football.kg/api/v1/tables/chess/?divizion=${id}`)
        .then(res => {return res.json()})
        console.log(res);
        return res;
    }
);



const initialState = {
    data: [],
    isError: false,
    isLoading: true,
};


export const divisionSlice = createSlice({
    name: 'division',
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        }
    },
    extraReducers: {
        [fetchDivision.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            console.log(action.payload);
        },
        [fetchDivision.rejected.type]: (state) => {
            state.isError = true;
            state.isLoading = true;
        },
        [fetchDivision.pending]: (state) => {
            state.isError = false;
            state.isError = false;
        }
    }
});

export const { setData } = divisionSlice.actions;
export default divisionSlice.reducer;