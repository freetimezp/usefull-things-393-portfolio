import { Button } from '@/components/ui/button';

import { socialLinks } from '@/data/data';

const Profile = () => {
  return (
    <aside
      className='max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6 
      rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96'
    >
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-x-10'>
          <h1 className='text-3xl font-bold'>WebDev</h1>
          <p className='text-sm'>Modern & Creative Frontend</p>
        </div>

        <img
          src='/avatar.jpg'
          alt='photo avatar'
          className='lg:w-96 lg:h-96 rounded-2xl object-cover overflow-hidden'
        />

        <div className='mt-6'>
          <p className='text-sm text-neutral-400'>Career</p>
          <p className='text-lg capitalize'>
            UI/UX designer & frontend developer
          </p>
        </div>

        <div>
          <p className='text-sm text-neutral-400'>Live in:</p>
          <p className='text-lg capitalize'>Ukraine</p>
        </div>

        <div className='flex gap-3 pt-2 text-neutral-500'>
          {socialLinks.map((social, i) => {
            const Icon = social.icon;

            return (
              <a
                href={social.link}
                key={i}
                className='hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary
                  transition duration-200'
              >
                <Icon className='size-6' />
              </a>
            );
          })}
          ;
        </div>

        <Button
          className='mt-2'
          size='lg'
        >
          Let's Talk
        </Button>
      </div>
    </aside>
  );
};

export default Profile;
