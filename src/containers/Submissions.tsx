import React, { useEffect } from 'react';
import { getActivitiesForUser } from '../api/activities.client';
import { ActivityDto } from '../models/activity.dto';
import { seperateActivitiesByCategory } from '../shared/utils/activity.util';
import "./Submissions.scss";

const activities: ActivityDto[] = [
    {
        id: "1",
        name:"name",
        academicYearId:"1",
        isFavorite:false,
        userId:"1", 
        year:2023, 
        semester:"Fall", 
        description:"uddjnxdx", 
        category:"RESEARCH",
        significance:"MAJOR"
    },
    {
        id: "2",
        name:"name 2",
        academicYearId:"1",
        isFavorite:false,
        userId:"1", 
        year:2023, 
        semester:"Fall", 
        description:"uddjnxdx", 
        category:"TEACHING",
        significance:"MAJOR"
    }
];

const seperateActivites = seperateActivitiesByCategory(activities);

const SubmissionsPage: React.FC = () => {
    useEffect(() => 
    {
        getActivitiesForUser('1').then((activities) => {
            console.log(activities);
        })
    });
    return (
        <div className="submission-page-container">
            <h1>Submitted Activities</h1>
            <h3>Teaching</h3>
            {
                seperateActivites["TEACHING"].map((activity, idx) => (
                    <div key={`teaching-${idx}`}>
                        <p>{activity.name}</p>
                    </div>
                ))
            }
            <h3>Creative Activity, Scholarship and Research/Professional Development</h3>
            {
                seperateActivites["RESEARCH"].map((activity, idx) => (
                    <div key={`research-${idx}`}>
                        <p>{activity.name}</p>
                    </div>
                ))
            }
            <h3>Service</h3>
            {
                seperateActivites["SERVICE"].map((activity, idx) => (
                    <div key={`searching-${idx}`}>
                        <p>{activity.name}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default SubmissionsPage;
