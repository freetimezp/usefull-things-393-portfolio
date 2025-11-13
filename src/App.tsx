import { useState } from 'react';

import Hero from '@/components/Hero';
import Stats from '@/components/Stats';

function App() {
  return (
    <main className='flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl'>
      <Hero />
      <Stats />
    </main>
  );
}

export default App;
