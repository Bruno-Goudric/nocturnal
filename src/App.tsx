import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import CreateJournal from './pages/CreateJournal';
import ListJournal from './pages/ListJournal';
import Note from './pages/Note';
import CreateNote from './pages/CreateNote';
import ListNote from './pages/ListNote';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-journal" element={<CreateJournal />} />
        <Route path="/list-journal" element={<ListJournal />} />
        <Route path="/note" element={<Note />} />
        <Route path="/create-note" element={<CreateNote />} />
        <Route path="/list-note" element={<ListNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
