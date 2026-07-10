import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

import { fadeUp } from '@/lib/animations';
import type { ProjectType } from '@/types';

const ProjectCard = ({ imgSrc, projectLink, tags, title }: ProjectType) => {
  const [hovered, setHovered] = useState(false);

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setMouse({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl'
    >
      {/* Cursor Glow */}

      <div
        className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300'
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%,
          rgba(255,255,255,.12),
          transparent 55%)`,
        }}
      />

      {/* Image */}

      <figure className='overflow-hidden rounded-[22px] m-3'>
        <motion.img
          src={imgSrc}
          alt={title}
          animate={
            hovered
              ? {
                  scale: 1.08,
                  rotate: 1,
                }
              : {
                  scale: 1,
                  rotate: 0,
                }
          }
          transition={{
            duration: 0.6,
          }}
          className='w-full h-[340px] object-cover grayscale-80 transition '
        />
      </figure>

      {/* Overlay */}

      <div
        className='absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-transparent opacity-0
        group-hover:opacity-100 transition duration-500'
      />

      {/* Content */}

      <div className='absolute inset-0 flex flex-col justify-end p-8'>
        <motion.div
          initial={false}
          animate={
            hovered
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {
                  y: 40,
                  opacity: 0,
                }
          }
          transition={{
            duration: 0.35,
          }}
        >
          <p className='text-sm uppercase tracking-[0.3em] text-primary'>
            Featured Project
          </p>

          <h3 className='mt-2 text-3xl font-bold'>{title}</h3>

          <div className='flex flex-wrap gap-2 mt-5'>
            {tags.map((tag) => (
              <span
                key={tag}
                className='                
                rounded-full
                border
                border-white/10
                bg-white/10
                backdrop-blur-xl
                px-3
                py-1
                text-xs
                '
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.a
            href={projectLink}
            target='_blank'
            rel='noreferrer'
            whileHover={{
              x: 6,
            }}
            className='
            mt-8
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            bg-primary
            px-5
            py-3
            font-medium
            text-black
            '
          >
            View Project
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>

      {/* Number */}

      <span
        className='
        absolute
        right-6
        top-2
        text-[120px]
        font-black
        leading-none
        text-white/3
        pointer-events-none
      '
      >
        01
      </span>

      {/* Bottom glow */}

      <div
        className='
        absolute
        -bottom-24
        left-1/2
        h-52
        w-52
        -translate-x-1/2
        rounded-full
        bg-primary/20
        blur-3xl
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
      '
      />
    </motion.article>
  );
};

export default ProjectCard;
