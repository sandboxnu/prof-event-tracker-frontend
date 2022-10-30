import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CategorySelector from '../CategorySelector/CategorySelector';
import { FormStep, selectStep } from '../form.store';
import FormInstructions from '../FormInstructions/FormInstructions';
import FormInput from '../FormInput/FormInput';
import './ActivityForm.css';

const StepComponent: Record<FormStep, JSX.Element> = {
    'selection': <CategorySelector />,
    'form': <FormInput />,
    'success': <div>succ</div>
}

const ActivityForm: React.FC = () => {
    const step: FormStep = useSelector(selectStep);

    useEffect(() => {
        window.onbeforeunload = () => {
            return 'Data will be lost if you leave the page, are you sure?';
        };
    }, []);
    
    return (
        <div className='form-container'>
            <div className='left-column'>
                { StepComponent[step] }
            </div>
            <div className='right-column'>
                <FormInstructions/>
            </div>
        </div>
    )
};

export default ActivityForm;
