import React from 'react';
import Dashboard from '../dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import ProfilePage from '../profile/Profile';
import ActivityForm from '../activityForm/ActivityForm';
import SubmissionsPage from '../Submissions/Submissions';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to='/dashboard'> Dashboard </Link>
  </div>
);


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/new-activity' element={<ActivityForm />} />
        <Route path='/submissions' element={<SubmissionsPage />} />
        <Route path='' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
