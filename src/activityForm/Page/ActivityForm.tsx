import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CategorySelector from '../CategorySelector/CategorySelector';
import { FormStep, selectStep } from '../form.store';
import FormInput from '../FormInput/FormInput';
import ResultPage from '../ResultPage/ResultPage';
import FormContainer from '../FormContainer/FormContainer';
import './ActivityForm.css';

const StepComponent: Record<FormStep, JSX.Element> = {
    'selection': <FormContainer><CategorySelector/></FormContainer>, // TODO: Look into children
    'form': <FormContainer><FormInput/></FormContainer>,
    'success': <ResultPage success={true}/>,
    'loading': <div></div>,
    'error': <ResultPage success={false}/>
}

const ActivityForm: React.FC = () => {
    const step: FormStep = useSelector(selectStep);

    useEffect(() => {
        window.onbeforeunload = () => {
            return 'Data will be lost if you leave the page, are you sure?';
        };
    }, []);
    
    return StepComponent[step];
};

export default ActivityForm;
