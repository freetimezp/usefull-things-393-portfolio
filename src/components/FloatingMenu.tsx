import { useState } from 'react';

import { cn } from '@/lib/utils';
import { navLinks } from '@/data/data';

const FloatingMenu = () => {
  const [active, setActive] = useState('#hero');

  return (
    <div
      className='floating-menu fixed z-0 rounded-full border border-white/10 bg-white/5
      backdrop-blur-xl p-3 shadow-2xl'
    >
      {navLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            href={link.link}
            key={link.label}
            onClick={() => setActive(link.link)}
            className={cn(
              'relative group flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300',
              active === link.link
                ? 'bg-primary/10 text-white scale-110'
                : 'text-neutral-500 hover:bg-white/5',
            )}
          >
            <Icon className='size-5' />

            <span
              className='absolute right-full mr-4 rounded-full bg-neutral-900 text-white px-3 py-1
                  text-sm opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0
                  transition whitespace-nowrap'
            >
              {link.label}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default FloatingMenu;
