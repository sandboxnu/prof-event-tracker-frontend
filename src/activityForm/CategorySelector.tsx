import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ActivityCategory, setCategory } from './form.store';

const CategorySelector: React.FC = () => {
    const [category, setCategoryInput] = useState<ActivityCategory | null>(null);
    const dispatch = useDispatch();

    
    const handleChange = (event:any) => {
        const newCategory: ActivityCategory = event.target.value as ActivityCategory;
        if (newCategory) {
            setCategoryInput(newCategory);
        }
    };

    const submit = () => {
        if (category) {
            dispatch(setCategory(category));
        }
    }

    return (
    <div>
        <h1>Category</h1>
        <ol>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ol>
        <label>
            Select Category
            <div>
                <select value={category || ""} onChange={handleChange}>
                    <option value="">Select a Category</option>
                    <option value="teaching">Teaching</option>
                    <option value="creative">Creative Activity, Scholarship and Research/Professional Development</option>
                    <option value="service">Service</option>
                </select>
            </div>
        </label>
        <button onClick={submit} disabled={category === null}>Next</button>
    </div>
    );
};

export default CategorySelector;
