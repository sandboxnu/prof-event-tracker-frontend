import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from '../containers/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ProfilePage from '../containers/Profile';
import ActivityForm from '../containers/ActivityForm';
import SubmissionsPage from '../containers/Submissions';
import Navbar from '../shared/components/Navbar/Navbar';
import { store } from './app.store';

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);


function App() {
  return (
    <Provider store={store}>
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
    </Provider>
    
  );
}

export default App;
