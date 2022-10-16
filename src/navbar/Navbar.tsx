import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <div>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/new-activity'>Submit a New Activity</Link>
            <Link to='/submissions'>Submissions</Link>
            <Link to='/profile'>My Profile</Link>
            
        </div>
    )
};

export default Navbar;
