import { createSlice, Selector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/app.store";

export type ActivityCategory = 'teaching' | 'creative' | 'service';

export interface FormState {
    category: ActivityCategory | null,
};

const initialState: FormState = {
    category: null,
};

export const formSlice = createSlice({
    name: 'Form',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<ActivityCategory>) => {
            state.category = action.payload;
        },
        resetForm: (state) => {
            state.category = null;
        },
    },
});

export const { setCategory, resetForm } = formSlice.actions;

export const selectCategory: Selector<RootState, ActivityCategory|null> = (state) => state.form.category;

export default formSlice.reducer;
