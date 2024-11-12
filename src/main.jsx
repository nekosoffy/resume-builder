import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Name from './components/Name';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import './styles/styles.css';
import './styles/reset.css';
import Education from './components/Education';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <Name />
      <PersonalInfo />
      <Experience />
      <Education />
    </main>
  </StrictMode>
);
