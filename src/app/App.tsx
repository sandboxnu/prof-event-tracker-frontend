import React from 'react';
import Dashboard from '../dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ProfilePage from '../profile/Profile';
import ActivityForm from '../activityForm/ActivityForm';
import SubmissionsPage from '../submissions/Submissions';
import Navbar from '../navbar/Navbar';

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);


function App() {
  return (
    <Router>
      <Navbar />
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
