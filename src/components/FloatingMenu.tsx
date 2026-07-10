import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { navLinks } from '@/data/data';

const FloatingMenu = () => {
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      },
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.link);

      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className='
        fixed
        z-30
        
        bottom-5
        left-1/2
        -translate-x-1/2
        
        flex
        flex-row
        
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        
        p-2
        
        lg:top-1/2
        lg:right-10
        lg:left-auto
        lg:bottom-auto
        lg:-translate-y-1/2
        lg:translate-x-0
        lg:flex-col
        lg:p-3
        '
    >
      {navLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.link}
            onClick={() => setActive(link.link)}
            className={cn(
              'group relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300',
              active === link.link
                ? 'scale-110 bg-primary/35 text-white shadow-lg shadow-primary/30'
                : 'text-neutral-500 hover:bg-white/5 hover:text-white',
            )}
          >
            <Icon className='size-5' />

            <span
              className='
              scale-0
              lg:scale-100

              absolute
              right-full
              mr-4
              whitespace-nowrap
              rounded-full
              bg-neutral-900
              px-3
              py-1
              text-sm
              text-white
              opacity-0
            
              transition
              group-hover:translate-x-0
              group-hover:opacity-100
              '
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
