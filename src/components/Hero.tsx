import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';

import { Button } from '@/components/ui/button';
import { SparkleIcon } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-24 flex flex-col justify-center relative'
      id='hero'
    >
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div
          className='absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2
          rounded-full bg-primary/10 blur-[180px] animate-pulse'
        />
      </div>

      <motion.p
        variants={fadeUp}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32'
      >
        <SparkleIcon size={15} /> <span>2026 Portfolio</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className='text-4xl md:text-5xl lg:text-6xl mt-4 font-semibold capitalize max-w-3xl md:leading-16'
      >
        I'm <span className='text-primary'>Olexandra</span> UI/UX designer and
        frontend developer.
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className='mt-6 flex gap-2'
      >
        <Button asChild>
          <a href='#projects'>My projects</a>
        </Button>

        <Button variant='outline'>Download CV</Button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
