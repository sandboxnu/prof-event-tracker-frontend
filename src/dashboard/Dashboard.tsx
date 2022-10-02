import React from 'react';
import {Link} from 'react-router-dom';

const Dashboard: React.FC = () => {

    return (
        <div>
            <h1> Dashboard </h1>
            <Link to='/profile'> <p>Profile</p> </Link>
            <Link to='/new-activity'> <p>Submit new activity</p> </Link>
            <Link to='/submissions'> <p>View submissions</p> </Link>
        </div>
    );
};

export default Dashboard;
