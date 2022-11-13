import { ActivityCategory, ActivityWeight } from "../form.store";

export type CreateActivityDto = {
    userId : number;
    academicYearId : number;
    date : Date;
    name : string;
    description : string;
    category : ActivityCategory;
    significance : ActivityWeight;
    isFavorite : boolean;
};