import { createSlice, Selector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/app.store";

export type FormStep = 'selection' | 'form' | 'success';
export type ActivityCategory = 'teaching' | 'creative' | 'service';
export type ActivityWeight = 'major' | 'significant' | 'minor';
export type DateString = `${number}-${number}-${number}`;

export interface FormState {
    step: FormStep,
    category: ActivityCategory | null,
    weight: ActivityWeight | null,
    date: DateString | null,
    description: string
};

const initialState: FormState = {
    step: 'selection',
    category: null,
    weight: null,
    date: null,
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
        setDate: (state, action: PayloadAction<DateString>) => {
            state.date = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        resetForm: (state) => {
            state.step = 'selection';
            state.category = null;
            state.weight = null;
            state.date = null;
            state.description = '';
        },
    },
});

export const { setStep, setCategory, setWeight, setDate, setDescription, resetForm } = formSlice.actions;

export const selectStep: Selector<RootState, FormStep> = (state) => state.form.step;

export const selectCategory: Selector<RootState, ActivityCategory|null> = (state) => state.form.category;

export const selectWeight: Selector<RootState, ActivityWeight | null> = (state) => state.form.weight;

export const selectDate: Selector<RootState, DateString | null> = (state) => state.form.date;

export const selectDescription: Selector<RootState, string> = (state) => state.form.description;

export default formSlice.reducer;
