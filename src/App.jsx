import { useState } from 'react';
import SideNav from './components/Sidenav';
import Main from './components/MainPage';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <SideNav />
      <Main></Main>
      <Work></Work>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
