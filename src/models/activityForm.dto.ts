import { ActivityCategory, ActivityWeight } from "../store/form.store";

export type Semester = 'Fall' | 'Spring' | 'Summer 1' | 'Summer 2';

export type CreateActivityDto = {
    userId: number;
    academicYearId: number;
    year: number;
    semester: Semester;
    date?: Date;
    name: string;
    description: string;
    category: ActivityCategory;
    significance: ActivityWeight;
    isFavorite: boolean;
};