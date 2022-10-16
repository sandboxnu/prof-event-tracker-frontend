import React from 'react';
import { useSelector } from 'react-redux';
import CategorySelector from './CategorySelector';
import { ActivityCategory, selectCategory } from './form.store';
import SubmissionForm from './SubmissionForm';

const ActivityForm: React.FC = () => {
    const category: ActivityCategory | null = useSelector(selectCategory);
    console.log(category);
    return (
        <div>
            {
                (category === null) ? <CategorySelector/> : <SubmissionForm/>
            }
        </div>
    )
};

export default ActivityForm;
