import { createSlice, Selector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/app.store";

export type FormStep = 'selection' | 'form' | 'success';
export type ActivityCategory = 'TEACHING' | 'RESEARCH' | 'SERVICE';
export type ActivityWeight = 'MAJOR' | 'SIGNIFICANT' | 'MINOR';
export type FormStatus = 'in progress' | 'loading' | 'success' | 'error';


// TODO: We might want to make this string or null? and do the a null check inside the component? Or we can check for null and validate
// that it fits the intended format before sending to the backend? Either way we have to check for correct format before sending to backend
export interface FormState {
    step: FormStep,
    activityName: string | null
    category: ActivityCategory | null,
    weight: ActivityWeight | null,
    date: string,
    description: string,
    status: FormStatus,
};

const initialState: FormState = {
    step: 'selection',
    activityName: null,
    category: null,
    weight: null,
    date: '',
    description: '',
    status: 'in progress',
};

export const formSlice = createSlice({
    name: 'Form',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<FormStep>) => {
            state.step = action.payload;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.activityName = action.payload;
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
        setStatus:(state, action: PayloadAction<FormStatus>) => {
            state.status = action.payload;
        },
        resetForm: (state) => {
            state.step = 'selection';
            state.activityName = null;
            state.category = null;
            state.weight = null;
            state.date = '';
            state.description = '';
            state.status = 'in progress';
        },
    },
});

export const { setName, setStep, setCategory, setWeight, setDate, setDescription, setStatus, resetForm } = formSlice.actions;

export const selectName: Selector<RootState, string|null> = (state) => state.form.activityName;

export const selectStep: Selector<RootState, FormStep> = (state) => state.form.step;

export const selectCategory: Selector<RootState, ActivityCategory|null> = (state) => state.form.category;

export const selectWeight: Selector<RootState, ActivityWeight | null> = (state) => state.form.weight;

export const selectDate: Selector<RootState, string> = (state) => state.form.date;

export const selectDescription: Selector<RootState, string> = (state) => state.form.description;

export const selectStatus: Selector<RootState, FormStatus> = (state) => state.form.status;

export default formSlice.reducer;
