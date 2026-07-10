import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import Sidebar from '@/components/Sidebar.tsx';
import FloatingMenu from '@/components/FloatingMenu.tsx';
import Profile from '@/components/Profile.tsx';
import BackgroundWords from './components/BackgroundWords.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BackgroundWords />

    <div className='lg:flex lg:justify-center lg:items-start lg:gap-10 min-h-screen'>
      <Sidebar />
      <FloatingMenu />
      <Profile />

      <App />
    </div>
  </StrictMode>,
);
