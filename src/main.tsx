import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import Sidebar from '@/components/Sidebar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='lg:flex lg:justify-center lg:items-start lg:gap-10 min-h-screen'>
      <Sidebar />
      <App />
    </div>
  </StrictMode>,
);
