import React from 'react';
import { useSelector } from 'react-redux';
import CategorySelector from './CategorySelector';
import { FormStep, selectStep } from './form.store';
import FormInstructions from './FormInstructions';
import FormInput from './FormInput';
import './ColumnStyling.css';

const StepComponent: Record<FormStep, JSX.Element> = {
    'selection': <CategorySelector />,
    'form': <FormInput />,
    'success': <div>succ</div>
}

const ActivityForm: React.FC = () => {
    const step: FormStep = useSelector(selectStep);
    
    return (
        <div className='column'>
            { StepComponent[step] }
            <FormInstructions/>
        </div>
    )
};

export default ActivityForm;
