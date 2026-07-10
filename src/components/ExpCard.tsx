import { motion } from 'motion/react';
import type { ExperienceType } from '@/types';

interface Props {
  item: ExperienceType;
}

const ExpCard = ({ item }: Props) => {
  return (
    <motion.article
      whileHover={{
        x: 8,
      }}
      transition={{
        duration: 0.3,
      }}
      className='
            group
            relative
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-6
            overflow-hidden
        '
    >
      {/* Glow */}

      <div
        className='
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-gradient-to-r
                from-primary/10
                via-transparent
                to-transparent
            '
      />

      {/* Timeline Dot */}

      <div
        className='
                absolute
                -left-[37px]
                top-10
                size-4
                rounded-full
                bg-neutral-500
                border-4
                border-background
                transition
                group-hover:bg-primary
                group-hover:scale-125
            '
      />

      <span
        className='
                text-sm
                tracking-[0.2em]
                uppercase
                text-neutral-400
                group-hover:text-primary
                transition
            '
      >
        {item.year}
      </span>

      <h3 className='mt-2 text-xl font-semibold'>{item.title}</h3>

      <p className='mt-2 text-neutral-400'>{item.institute}</p>

      <p className='mt-4 leading-7 text-neutral-400'>{item.desc}</p>
    </motion.article>
  );
};

export default ExpCard;
