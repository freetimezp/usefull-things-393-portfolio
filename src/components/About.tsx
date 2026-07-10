import { motion } from 'motion/react';
import { ArrowRight, Code2, Layers3, Sparkles } from 'lucide-react';

import { fadeUp, staggerContainer } from '@/lib/animations';

import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

const tech = [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind',
  'Motion',
  'Three.js',
  'GSAP',
  'Figma',
];

const About = () => {
  return (
    <motion.section
      id='about'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0.15)}
      className='mt-40 scroll-mt-24'
    >
      <SectionHeader
        subtitle='About Me'
        title='Creative ideas converted into premium web experiences.'
      />

      <div className='grid gap-14 mt-14 lg:grid-cols-[1.2fr_0.8fr] items-start'>
        {/* LEFT */}

        <motion.div variants={fadeUp}>
          <p className='leading-8 text-neutral-300'>
            I specialize in building modern digital experiences that combine
            clean user interfaces, meaningful interactions, and performant
            frontend architecture. Every project is crafted with attention to
            detail, accessibility, and smooth motion.
          </p>

          <p className='mt-6 leading-8 text-neutral-400'>
            My workflow blends design thinking with modern development tools,
            allowing me to transform ideas into responsive interfaces that feel
            intuitive across every device.
          </p>

          {/* Feature list */}

          <div className='mt-10 space-y-6'>
            <motion.div
              whileHover={{ x: 8 }}
              className='flex gap-5'
            >
              <div className='rounded-xl bg-primary/10 p-3 text-primary'>
                <Code2 size={24} />
              </div>

              <div>
                <h3 className='font-semibold text-lg'>Modern Frontend</h3>

                <p className='text-neutral-400'>
                  React, Next.js, TypeScript, Motion and performant
                  architecture.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 8 }}
              className='flex gap-5'
            >
              <div className='rounded-xl bg-primary/10 p-3 text-primary'>
                <Layers3 size={24} />
              </div>

              <div>
                <h3 className='font-semibold text-lg'>UI / UX Design</h3>

                <p className='text-neutral-400'>
                  Interfaces focused on usability, clarity and visual
                  storytelling.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 8 }}
              className='flex gap-5'
            >
              <div className='rounded-xl bg-primary/10 p-3 text-primary'>
                <Sparkles size={24} />
              </div>

              <div>
                <h3 className='font-semibold text-lg'>Interactive Motion</h3>

                <p className='text-neutral-400'>
                  Smooth animations with Motion, GSAP and Three.js.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-8'
        >
          <div className='absolute -top-24 right-0 h-56 w-56 rounded-full bg-primary/20 blur-3xl' />

          <div className='relative'>
            <p className='text-neutral-400 uppercase tracking-[0.3em]'>
              Profile
            </p>

            <h3 className='mt-2 text-4xl font-bold'>8+</h3>

            <p className='text-neutral-400'>Years crafting digital products.</p>

            <div className='mt-10'>
              <h4 className='font-semibold'>Technologies</h4>

              <div className='mt-5 flex flex-wrap gap-3'>
                {tech.map((item) => (
                  <span
                    key={item}
                    className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm '
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Button className='mt-10 w-full group'>
              Contact Me
              <ArrowRight
                className='transition-transform group-hover:translate-x-1'
                size={18}
              />
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
