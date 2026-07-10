import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

import { fadeUp } from '@/lib/animations';
import type { ServiceType } from '@/types';

interface Props {
  service: ServiceType;
  index: number;
}

const ServiceCard = ({ service, index }: Props) => {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.35,
      }}
      className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 
        backdrop-blur-xl p-8'
    >
      {/* Glow */}

      <div
        className='absolute inset-0 opacity-0 group-hover:opacity-100 transition
          duration-500 bg-linear-to-r from-primary/10 via-transparent to-transparent'
      />

      {/* Animated line */}

      <div
        className='absolute left-0 top-0 h-full w-[3px] bg-primary scale-y-0 origin-top
          transition-transform duration-500 group-hover:scale-y-100'
      />

      <div className='relative flex items-center justify-between gap-10'>
        {/* Left */}

        <div className='flex gap-6'>
          <span className='text-5xl font-black text-white/10 transition group-hover:text-primary'>
            {String(index + 1).padStart(2, '0')}
          </span>

          <div>
            <h3 className='text-2xl font-semibold transition-colors group-hover:text-primary'>
              {service.title}
            </h3>

            <p className='mt-3 max-w-xl leading-7 text-neutral-400'>
              {service.desc}
            </p>

            <span
              className='mt-5 inline-block rounded-full border border-white/10 bg-white/5 
                px-4 py-2 text-xs uppercase tracking-[0.25em] text-neutral-300'
            >
              {service.projects}
            </span>
          </div>
        </div>

        {/* Right */}

        <div className='flex items-center gap-6'>
          <motion.div
            whileHover={{
              rotate: 10,
              scale: 1.1,
            }}
            className='flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary'
          >
            {service.icon}
          </motion.div>

          <ArrowUpRight
            className='opacity-0 translate-x-3 transition-all duration-300 group-hover:translate-x-0
              group-hover:opacity-100'
            size={24}
          />
        </div>
      </div>

      {/* Background Number */}

      <span
        className='absolute right-8 top-1/2 -translate-y-1/2 text-[140px] font-black leading-none
        text-white/3 pointer-events-none'
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Bottom Glow */}

      <div
        className='absolute -bottom-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full 
          bg-primary/20 blur-3xl opacity-0 transition-opacity duration-500 
          group-hover:opacity-100'
      />
    </motion.article>
  );
};

export default ServiceCard;
