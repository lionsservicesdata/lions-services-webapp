import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	variable: "this is a variable from redux"
};

const Slice = createSlice({
	name: "Slice",
	initialState,
	reducers: {

		updateVariable: (state, action) => {
			state.variable = action.payload
		},

	},
	extraReducers: {},
});

export const { 
	updateVariable,
} = Slice.actions;

export default Slice.reducer;