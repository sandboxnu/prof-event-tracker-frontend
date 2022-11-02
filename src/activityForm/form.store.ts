import { createSlice, Selector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/app.store";

export type FormStep = 'selection' | 'form' | 'success';
export type ActivityCategory = 'teaching' | 'creative' | 'service';
export type ActivityWeight = 'major' | 'significant' | 'minor';

// TODO: We might want to make this string or null? and do the a null check inside the component? Or we can check for null and validate
// that it fits the intended format before sending to the backend? Either way we have to check for correct format before sending to backend
export interface FormState {
    step: FormStep,
    category: ActivityCategory | null,
    weight: ActivityWeight | null,
    date: string,
    description: string
};

const initialState: FormState = {
    step: 'selection',
    category: null,
    weight: null,
    date: '',
    description: ''
};

export const formSlice = createSlice({
    name: 'Form',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<FormStep>) => {
            state.step = action.payload;
        },
        setCategory: (state, action: PayloadAction<ActivityCategory>) => {
            state.category = action.payload;
        },
        setWeight: (state, action: PayloadAction<ActivityWeight>) => {
            state.weight = action.payload;
        },
        setDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        resetForm: (state) => {
            state.step = 'selection';
            state.category = null;
            state.weight = null;
            state.date = '';
            state.description = '';
        },
    },
});

export const { setStep, setCategory, setWeight, setDate, setDescription, resetForm } = formSlice.actions;

export const selectStep: Selector<RootState, FormStep> = (state) => state.form.step;

export const selectCategory: Selector<RootState, ActivityCategory|null> = (state) => state.form.category;

export const selectWeight: Selector<RootState, ActivityWeight | null> = (state) => state.form.weight;

export const selectDate: Selector<RootState, string> = (state) => state.form.date;

export const selectDescription: Selector<RootState, string> = (state) => state.form.description;

export default formSlice.reducer;
