import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityCategory, ActivityWeight, FormStatus, selectCategory, selectDate, selectDescription, selectName, selectStatus, selectWeight, setDate, setDescription, setName, setStatus, setStep, setWeight } from "../form.store";
import Tooltip from "../../tooltip/Tooltip";
import './FormInput.scss';
import infoIcon from '../../media/infoIcon.svg';
import { createDateFromString } from "../../utils/date.utils";
import { CreateActivityDto } from "../Api/activityForm.dto";
import { createActivity } from "../Api/activityForm.client";

const categoryLabels: Record<ActivityCategory, string> = {
    TEACHING: "Teaching",
    RESEARCH: "Creative Activity, Scholarship and Research/Professional Development",
    SERVICE: "Service",
};

const FormInput: React.FC = () => {
    const category: ActivityCategory | null = useSelector(selectCategory);
    const name: string | null = useSelector(selectName);
    const weight: ActivityWeight | null = useSelector(selectWeight);
    const date: string = useSelector(selectDate);
    const description: string = useSelector(selectDescription);
    const status: FormStatus = useSelector(selectStatus);
    console.log(status);

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

    const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const newName: string = event.target.value;
        dispatch(setName(newName));
    };

    const changeToDate: FocusEventHandler<HTMLInputElement> = (event) => {
        event.target.type="date";
    };

    const changeToText: FocusEventHandler<HTMLInputElement>  = (event) => {
        if(!event.target.value) {
            event.target.type="text"
        }
    };

    const submitActivity = () => {
        if (!date || !description || !category || !weight || !name) return;
        const dateObject = createDateFromString(date);
        if (!dateObject) return;

        const newActivityDto: CreateActivityDto = {
            userId : 1,
            academicYearId : 1,
            date : dateObject,
            name : name,
            description : description,
            category : category,
            significance : weight,
            isFavorite : true
        };
        dispatch(setStatus('loading'));
        createActivity(newActivityDto).then((res) => {
            dispatch(setStatus(res? 'success' : 'error'));
        });
    };

    if (category === null) return (<div>Category must be selected</div>);
    return (
        <div className="form-input-container">
            <h1>{categoryLabels[category]}</h1>

            {/* TODO: Connect to Redux Store */}
            <div className="input-container">
                <label>Name:</label>
                <input type={"text"} placeholder="Enter Activity Name" onChange={handleNameChange} value={name || ''}></input>
            </div>
            
            <div className="input-container">
                <label>Weight:</label>
                <div className="tooltip-container">
                    <img src={infoIcon} alt="Little information icon" width={22} height={22}/>
                    <Tooltip tooltipTitle="Weight Examples" text={[
                        'Major: New courses, significantly redesigned courses, large courses (more than 25 students), running a dialogue',
                        'Significant: Workshops, fieldtrips, collaborations, client projects, etc.',
                        'Minor: Directed study, guest critic, guest lecture, letter of recommendation, mentoring'
                    ]}/>
                </div>
                <select value={weight || ""} onChange={handleWeightChange}>
                    <option value="">Select Weight</option>
                    <option value="MAJOR">Major</option>
                    <option value="SIGNIFICANT">Significant</option>
                    <option value="MINOR">Minor</option>
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
                <button disabled={weight === null || date === null || description === ''} onClick={submitActivity}>Submit</button> 
            </div>
        </div>
    );
};

export default FormInput;
