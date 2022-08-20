import React from 'react' 
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './Main.css';

const Main = () => {
  return (
    <Router> 
      <Routes>
        <Route path='/' element= { <Dashboard/> } />
        <Route path='login' element= {<Login/>} /> 
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default Main