import { Button } from '@/components/ui/button';

import { socialLinks } from '@/data/data';

import avatarImg from '/avatar.jpg';

const Profile = () => {
  return (
    <aside
      className='max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6 
      rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96'
    >
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-x-10'>
          <div className='space-y-2'>
            <p className='text-xs uppercase tracking-[0.35em] text-neutral-500'>
              Frontend Developer
            </p>

            <h1 className='text-5xl font-black tracking-tight'>
              Web<span className='text-primary'>Dev</span>
            </h1>

            <p className='max-w-xs text-neutral-400 leading-relaxed'>
              Building immersive interfaces, motion experiences and modern web
              applications.
            </p>
          </div>
        </div>

        <div className='relative group overflow-hidden rounded-3xl'>
          <img
            src={avatarImg}
            alt='Avatar'
            className='aspect-square w-full object-cover transition duration-700 group-hover:scale-105'
          />

          <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent' />

          <div className='absolute bottom-5 left-5'>
            <span className='rounded-full bg-emerald-500/20 px-3 py-1 text-xs backdrop-blur'>
              ● Available for work
            </span>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-3'>
          <div className='rounded-2xl border border-neutral-800 bg-neutral-800/40 p-4'>
            <p className='text-xs uppercase text-neutral-500'>Career</p>

            <p className='mt-2 font-medium'>UI/UX Designer</p>
          </div>

          <div className='rounded-2xl border border-neutral-800 bg-neutral-800/40 p-4'>
            <p className='text-xs uppercase text-neutral-500'>Based</p>

            <p className='mt-2 font-medium'>🇺🇦 Ukraine</p>
          </div>
        </div>

        <div className='grid grid-cols-3 place-items-center gap-3'>
          <div>
            <h3 className='text-2xl font-bold text-center'>70+</h3>
            <p className='text-xs text-neutral-500'>Projects</p>
          </div>

          <div>
            <h3 className='text-2xl font-bold text-center'>8+</h3>
            <p className='text-xs text-neutral-500'>Years</p>
          </div>

          <div>
            <h3 className='text-2xl font-bold text-center'>∞</h3>
            <p className='text-xs text-neutral-500'>Ideas</p>
          </div>
        </div>

        <div className='flex gap-3 pt-2 justify-center text-neutral-500'>
          {socialLinks.map((social, i) => {
            const Icon = social.icon;

            return (
              <a
                href={social.link}
                key={i}
                className='hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary
                  transition duration-200'
              >
                <Icon className='size-5 transition group-hover:rotate-12' />{' '}
              </a>
            );
          })}
          ;
        </div>

        <Button
          size='lg'
          className='mt-4 h-14 rounded-full text-base  font-semibold
                shadow-xl
                hover:scale-[1.03]
                active:scale-95
                transition-all'
        >
          Let's Talk →
        </Button>
      </div>

      <div className='absolute -z-10 left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-green-950 blur-[120px]' />
    </aside>
  );
};

export default Profile;
