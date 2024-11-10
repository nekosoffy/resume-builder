import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Name from './components/Name';
import PersonalInfo from './components/PersonalInfo';
import './styles/styles.css';
import './styles/reset.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <Name></Name>
      <PersonalInfo></PersonalInfo>
    </main>
  </StrictMode>
);
