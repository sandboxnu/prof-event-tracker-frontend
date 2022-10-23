import React, { ChangeEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityCategory, ActivityWeight, DateString, resetForm, selectCategory, selectDate, selectDescription, selectWeight, setDate, setDescription, setStep, setWeight } from "./form.store";

const categoryLabels: Record<ActivityCategory, string> = {
    teaching: "Teaching",
    creative: "Creative Activity, Scholarship and Research/Professional Development",
    service: "Service",
};

const FormInput: React.FC = () => {
    const category: ActivityCategory | null = useSelector(selectCategory);
    const weight: ActivityWeight | null = useSelector(selectWeight);
    const date: DateString | null = useSelector(selectDate);
    const description: string = useSelector(selectDescription);

    const dispatch = useDispatch();

    const handleWeightChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        const newWeight: ActivityWeight = event.target.value as ActivityWeight;
        if (newWeight) {
            dispatch(setWeight(newWeight));
        }
    };

    const handleDateChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const newDate: Date = new Date(event.target.value.replace('-', '/'));
        if (newDate) {
            const dateStr: DateString = `${newDate.getUTCFullYear()}-${newDate.getUTCMonth() + 1}-${newDate.getUTCDate()}`;
            dispatch(setDate(dateStr));
        }
    };

    const handleDescriptionChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const newDescription: string = event.target.value;
        dispatch(setDescription(newDescription));
    }

    if (category === null) return (<div>Category must be selected</div>);
    return (
        <div>
            <h1>{categoryLabels[category]}</h1>
            <label>Weight Guidelines:</label>
            <label>Weight:</label>
            <select value={weight || ""} onChange={handleWeightChange}>
                <option value="">Select Weight</option>
                <option value="major">Major</option>
                <option value="significant">Significant</option>
                <option value="minor">Minor</option>
            </select>
            <label>Date:</label>
            <input type='date' value={date || ''} onChange={handleDateChange} />
            <label>Description:</label>
            <input type='text' placeholder="Enter Description" value={description || ''} onChange={handleDescriptionChange}/>
            <button onClick={() => dispatch(setStep('selection'))}>Back</button>
            <button disabled={weight === null || date === null || description === ''}>Submit</button> 
        </div>
    );
};

export default FormInput;
