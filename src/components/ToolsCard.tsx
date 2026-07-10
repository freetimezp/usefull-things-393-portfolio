import { motion } from 'motion/react';

import { fadeUp } from '@/lib/animations';
import type { ToolsType } from '@/types';

const ToolsCard = ({ tool }: { tool: ToolsType }) => {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{
        duration: 0.3,
      }}
      className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3
        backdrop-blur-xl py-8 flex flex-col items-center'
    >
      <div
        className='absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-br
          from-primary/15 to-transparent'
      />

      <div
        className='flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5
          transition group-hover:rotate-6 '
      >
        <img
          src={tool.imgSrc}
          alt={tool.label}
          className='h-12 object-contain'
        />
      </div>

      <p className='mt-5 font-semibold'>{tool.label}</p>
    </motion.article>
  );
};

export default ToolsCard;
