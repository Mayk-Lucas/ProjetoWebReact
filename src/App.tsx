import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

import './assets/styles/global.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/study" element={<TeacherList />} />
          <Route path="/give-classes" element={<TeacherForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
