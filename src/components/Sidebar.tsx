import { useState } from 'react';
import { cn } from '@/lib/utils';

import { motion } from 'motion/react';

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

import { MenuIcon } from 'lucide-react';

import { navLinks, socialLinks } from '@/data/data';

const Sidebar = () => {
  const [active, setActive] = useState('#hero');

  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet
        open={open}
        onOpenChange={setOpen}
      >
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='
              fixed
              top-4
              right-4
              z-50

              h-12
              w-12

              rounded-full
              border
              border-white/10
              bg-neutral-900/80
              backdrop-blur-xl

              hover:border-primary
              hover:text-primary

              lg:h-14
              lg:w-14
              '
          >
            <MenuIcon size={30} />
          </Button>
        </SheetTrigger>

        <SheetContent
          side='right'
          className='
            w-[92vw]
            max-w-md
            bg-neutral-900
            text-white
            px-6
            py-8

            sm:w-[420px]
            lg:w-[480px]
          '
        >
          <SheetTitle className='text-lg font-semibold'>Menu</SheetTitle>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: -50 }}
            transition={{
              duration: 1,
            }}
            className='
                absolute
                bottom-4
                right-0
                

                select-none
                font-black
                tracking-tight

                text-[5rem]
                sm:text-[8rem]
                lg:text-[12rem]

                text-white/5
                '
          >
            MENU
          </motion.div>

          <div className='mt-3 flex items-center gap-2'>
            <span className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse' />

            <span className='text-sm text-neutral-400'>
              Available for freelance
            </span>
          </div>

          <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            <div className='absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/15 blur-[120px]' />

            <div className='absolute bottom-0 left-0 h-60 w-60 rounded-full bg-blue-500/10 blur-[120px]' />
          </div>

          <nav className='mt-8 mr-12 flex flex-col gap-2'>
            {navLinks.map((link, index) => {
              const Icon = link.icon;

              return (
                <motion.a
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                  }}
                  key={link.label}
                  href={link.link}
                  onClick={() => {
                    setActive(link.link);
                    setOpen(false);
                  }}
                  className={cn(
                    'group flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300',
                    active === link.link
                      ? 'bg-primary text-black'
                      : 'hover:bg-white/5 text-neutral-400',
                  )}
                >
                  <div className='flex items-center gap-4'>
                    <Icon className='size-5 transition group-hover:rotate-12' />

                    <span className='text-2xl font-semibold'>{link.label}</span>
                  </div>

                  <span className='translate-x-4 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100'>
                    →
                  </span>
                </motion.a>
              );
            })}
          </nav>

          <div className='mt-auto border-t flex items-center justify-items-start gap-3 border-white/10 pt-8'>
            <p className='text-sm text-neutral-500'>© 2026</p>

            <h3 className='text-xl font-bold'>WebDev</h3>
          </div>

          <div className='mt-10 lg:mt-30'>
            <p className='pb-2'>Socials</p>

            <div className='flex gap-3 text-neutral-500'>
              {socialLinks.map((social, i) => {
                const Icon = social.icon;

                return (
                  <a
                    href={social.link}
                    key={i}
                    className='hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary 
                        transition duration-200 z-50'
                  >
                    <Icon className='size-4' />
                  </a>
                );
              })}
              ;
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
