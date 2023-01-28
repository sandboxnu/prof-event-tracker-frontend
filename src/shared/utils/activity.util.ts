import { ActivityCategory, ActivityFields } from "../../store/Submission.store";

export const seperateActivitiesByCategory = (activities:ActivityFields[]): Record<ActivityCategory, ActivityFields[]> => {
    let activitiesByCategory: Record<ActivityCategory, ActivityFields[]> = {"TEACHING": [], "RESEARCH": [], "SERVICE": []}
    for (let activity of activities) { 
        activitiesByCategory[activity.category].push(activity);
    }
    return activitiesByCategory
}