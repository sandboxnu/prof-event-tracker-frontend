import React from 'react';
import { NavLink } from 'react-router-dom';
import successCheckmark from '../../media/successCheckmark.svg';
import './ResultPage.scss';

const ResultPage: React.FC<{success: boolean}> = ({success}) => {
    const icon = success? successCheckmark : successCheckmark; //TODO: Need failure icon
    return (
        <div className='result-page-container'>
            <img src={icon} alt="Icon" width={174} height={174}/>
            {
                success? 
                <>
                    <h1>Your activity was submitted!</h1>
                    <span>
                        If you'd like to view or edit previous submissions, navigate to <NavLink to='/submissions'>Submissions</NavLink>
                    </span>
                </> : 
                <h1>Your Activity was unable to be submitted</h1>
            }
        </div>
    )

};

export default ResultPage;