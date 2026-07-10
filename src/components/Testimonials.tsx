import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from 'lucide-react';

import { fadeUp } from '@/lib/animations';

import SectionHeader from '@/components/SectionHeader';

import { testimonials } from '@/data/data';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(next, 6000);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <motion.section
      id='testimonials'
      variants={fadeUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      className='mt-40 scroll-mt-24'
    >
      <SectionHeader
        subtitle='Testimonials'
        title='What clients say about working together.'
      />

      <div
        className='relative mt-14'
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode='wait'>
          <motion.article
            key={current}
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.97,
              filter: 'blur(12px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.97,
              filter: 'blur(12px)',
            }}
            transition={{
              duration: 0.55,
            }}
            className='group relative overflow-hidden rounded-4xl border border-white/10
              bg-white/3 backdrop-blur-xl p-10 md:p-14'
          >
            {/* Glow */}

            <div
              className='absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100
              bg-linear-to-br from-primary/10 via-transparent to-transparent'
            />

            {/* Huge Quote */}

            <Quote
              className='absolute right-8 top-8 text-white/5'
              size={180}
              strokeWidth={1}
            />

            {/* Stars */}

            <div className='relative flex gap-1 text-primary'>
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.08,
                  }}
                >
                  <Star
                    fill='currentColor'
                    size={18}
                  />
                </motion.div>
              ))}
            </div>

            {/* Review */}

            <motion.p className='relative mt-8 max-w-4xl text-2xl leading-relaxed font-light md:text-3xl'>
              "{testimonials[current].text}"
            </motion.p>

            {/* Footer */}

            <div className='relative mt-14 flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
              <div className='flex items-center gap-5'>
                <motion.img
                  whileHover={{
                    rotate: 4,
                    scale: 1.08,
                  }}
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className='h-20 w-20 rounded-full border border-white/10 object-cover'
                />

                <div>
                  <h3 className='text-xl font-semibold'>
                    {testimonials[current].name}
                  </h3>

                  <p className='mt-1 text-neutral-400'>
                    {testimonials[current].role}
                  </p>
                </div>
              </div>

              <motion.a
                whileHover={{
                  x: 5,
                }}
                href={testimonials[current].link}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 
                font-medium text-black'
              >
                View Project
                <ArrowUpRight size={18} />
              </motion.a>
            </div>

            {/* Background Number */}

            <span
              className='absolute bottom-0 right-8 text-[180px] font-black leading-none
              text-white/3 pointer-events-none'
            >
              {String(current + 1).padStart(2, '0')}
            </span>
          </motion.article>
        </AnimatePresence>

        {/* Bottom Navigation */}

        <div className='mt-8 flex items-center justify-between'>
          <div className='flex gap-3'>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${
                    current === i
                      ? 'w-10 bg-primary'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }
                `}
              />
            ))}
          </div>

          <div className='flex gap-3'>
            <button
              onClick={prev}
              className='flex h-12 w-12 items-center justify-center rounded-full border
              border-white/10 bg-white/3 transition hover:border-primary
              hover:bg-primary/10'
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              className='flex h-12 w-12 items-center justify-center rounded-full border
                border-white/10 bg-white/3 transition hover:border-primary  
                hover:bg-primary/10'
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
