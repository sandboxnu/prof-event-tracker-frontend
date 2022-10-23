import React from "react";

const FormInstructions: React.FC = () => {
    return (
        <div>
            <h1>Instructions:</h1>
            <ul>
                <li>For each activity, select a category, insert information about each activity, and provide a concise description that provides context.</li>
                <li>Each activity should have a weight of major, significant, or minor.</li>
                <li>Guidelines are provided but are not strictly enforced in the score calculation.</li>
                <li>If you would like to make a weight claim that is different than listed, it must be justified in the description.</li>
                <li>If you would like to make a bonus claim meaning that your work in one category should overflow into another, then justify it in the description.</li>
                <li>The committee may ask for evidence for extra support and context.</li>
            </ul>
        </div>
    );
};

export default FormInstructions;