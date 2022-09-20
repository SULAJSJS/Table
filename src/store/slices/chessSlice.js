import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// https://api.football.kg/api/v1/tables/chess/

export const fetchChess = createAsyncThunk(
    'chess/fetchChess',
    async (id) => {
        const response = await fetch(`https://api.football.kg/api/v1/team/division/`)
        .then(res => {return res.json()})
        console.log(response);
        return response;
    }
)



const initialState = {
    data: [],
    isError: false,
    isLoading: true,
}


export const chessSlice = createSlice({
    name: 'chess',
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        }
    },
    extraReducers: {
        [fetchChess.fulfilled.type]: (state, action) => {
            state.data = action.payload;
        },
        [fetchChess.rejected.type]: (state) => {
            state.isError = true;
            state.isLoading = true;
        },
        [fetchChess.pending]: (state) => {
            state.isError = false;
            state.isError = false;
        }
    }
})

export const { setData } = chessSlice.actions;
export default chessSlice.reducer;