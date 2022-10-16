import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityCategory, resetForm, selectCategory } from "./form.store";

const categoryLabels: Record<ActivityCategory, string> = {
    teaching: "Teaching",
    creative: "Creative Activity, Scholarship and Research/Professional Development",
    service: "Service",
};

const SubmissionForm: React.FC = () => {
    const category: ActivityCategory | null = useSelector(selectCategory);
    const dispatch = useDispatch();

    if (category === null) return (<div>Category must be selected</div>);
    return (
        <div>
            <h1>{categoryLabels[category]}</h1>
            <button onClick={() => dispatch(resetForm())}>Back</button>
        </div>
    );
};

export default SubmissionForm;
