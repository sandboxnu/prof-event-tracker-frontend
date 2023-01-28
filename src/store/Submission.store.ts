import { createSlice, Selector, PayloadAction } from "@reduxjs/toolkit"
import {RootState} from "../app/app.store";
import { Semester } from "../models/activity.dto";

export type ActivityCategory = "TEACHING" | "RESEARCH" | "SERVICE";
export type ActivityWeight = "MAJOR" | "SIGNIFICANCE" | "MINOR";

export type ActivityFields = { 
    userId : string; 
    academicYearId : number; 
    year: number;
    semester: Semester;
    name : string; 
    description : string; 
    category : ActivityCategory; 
    significance : ActivityWeight; 
    isFavorite : boolean;
}


export interface SubmissionState { 
    activities : ActivityFields[];


}

const initialState: SubmissionState = { 
    activities : []
}

export const submissionSlice = createSlice({
    name: 'Submission',
    initialState, 
    reducers: { 
        saveActivities: (state, action: PayloadAction<ActivityFields[]>) => { 
            state.activities = action.payload;
        }
    }

});

export const {saveActivities} = submissionSlice.actions;

export const selectActivities: Selector<RootState, ActivityFields[]> = state => state.submissions.activities;

export default submissionSlice.reducer;
