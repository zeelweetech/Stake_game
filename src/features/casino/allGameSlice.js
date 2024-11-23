import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allGame: []
}

const allGameSlice = createSlice({
    name: "allGame",
    initialState,
    reducers: {
        setAllGame: (state, action) => {
            state.allGame = action.payload
        },
    },
})

export const {setAllGame} = allGameSlice.actions;

export default allGameSlice.reducer
