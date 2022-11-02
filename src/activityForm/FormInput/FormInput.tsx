import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityCategory, ActivityWeight, selectCategory, selectDate, selectDescription, selectWeight, setDate, setDescription, setStep, setWeight } from "../form.store";
import './FormInput.scss';

const categoryLabels: Record<ActivityCategory, string> = {
    teaching: "Teaching",
    creative: "Creative Activity, Scholarship and Research/Professional Development",
    service: "Service",
};

const FormInput: React.FC = () => {
    const category: ActivityCategory | null = useSelector(selectCategory);
    const weight: ActivityWeight | null = useSelector(selectWeight);
    const date: string = useSelector(selectDate);
    const description: string = useSelector(selectDescription);

    const dispatch = useDispatch();

    const handleWeightChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        const newWeight: ActivityWeight = event.target.value as ActivityWeight;
        if (newWeight) {
            dispatch(setWeight(newWeight));
        }
    };

    const handleDateChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const newDate: string = event.target.value;
        dispatch(setDate(newDate));
    };

    const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        const newDescription: string = event.target.value;
        dispatch(setDescription(newDescription));
    };

    const changeToDate: FocusEventHandler<HTMLInputElement> = (event) => {
        event.target.type="date";
    }

    const changeToText: FocusEventHandler<HTMLInputElement>  = (event) => {
        if(!event.target.value) {
            event.target.type="text"
        }
    }

    if (category === null) return (<div>Category must be selected</div>);
    return (
        <div className="form-input-container">
            <h1>{categoryLabels[category]}</h1>
            
            <label id="weight-guidelines-label">Weight Guidelines:</label>
            <div className="guidelines-list">
                <p>8-10 Major Activity: 2 and above + Significant and Minor Activities: 10 and above</p>
                <p>7-8	Major Activity: 1-2 + Significant and Minor Activities: 6-10</p>
                <p>6-7	Major Activity: 0-1 + Significant and Minor Activities: 2-6</p>
                <p>6 Fulfilling required course load</p>
            </div>
            
            <div className="input-container">
                <label>Weight:</label>
                <select value={weight || ""} onChange={handleWeightChange}>
                    <option value="">Select Weight</option>
                    <option value="major">Major</option>
                    <option value="significant">Significant</option>
                    <option value="minor">Minor</option>
                </select>
            </div>

            <div className="input-container">
                <label>Date:</label>
                <input className="date-input"
                    type='text'
                    placeholder="Enter Date" 
                    value={date} 
                    onChange={handleDateChange} 
                    onFocus={changeToDate}
                    onBlur={changeToText}
                />
            </div>
            
            <div className="input-container">
                <label>Description:</label>
                <textarea
                placeholder="Enter Description" 
                value={description || ''} 
                onChange={handleDescriptionChange}
                rows={3}/>
            </div>
            
            <div className="button-container">
                <button onClick={() => dispatch(setStep('selection'))}>Back</button>
                <button disabled={weight === null || date === null || description === ''}>Submit</button> 
            </div>
        </div>
    );
};

export default FormInput;
