import { motion } from 'motion/react';
import { SparkleIcon } from 'lucide-react';

import { fadeUp, staggerContainer } from '@/lib/animations';

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <motion.section
      id='hero'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='relative flex min-h-[85svh] flex-col justify-center overflow-hidden
        px-4 py-16 sm:px-6 lg:min-h-screen lg:px-0'
    >
      {/* Background Glow */}

      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div
          className='absolute left-1/2 top-1/2 h-[380px] w-[380px]
          -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-primary/10 blur-[110px]
          sm:h-[500px] sm:w-[500px] sm:blur-[140px]
          lg:h-[700px] lg:w-[700px] lg:blur-[180px]
          animate-pulse'
        />
      </div>

      {/* Badge */}

      <motion.p
        variants={fadeUp}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className='mx-auto flex w-fit items-center gap-2 rounded-full
          border border-white/10 bg-white/5
          px-4 py-2 backdrop-blur-xl
          lg:mx-0'
      >
        <SparkleIcon
          size={15}
          className='text-primary'
        />

        <span className='text-sm font-medium'>2026 Portfolio</span>
      </motion.p>

      {/* Title */}

      <motion.h1
        variants={fadeUp}
        className='mx-auto mt-8 max-w-4xl text-center
          text-4xl font-semibold leading-tight
          sm:text-5xl
          md:text-6xl
          lg:mx-0 lg:text-left
          xl:text-7xl'
      >
        I'm <span className='text-primary'>Olexandra</span>
        <br />
        UI/UX Designer &
        <br />
        Frontend Developer.
      </motion.h1>

      {/* Description */}

      <motion.p
        variants={fadeUp}
        className='mx-auto mt-6 max-w-2xl text-center
          text-neutral-400
          leading-8
          lg:mx-0 lg:text-left'
      >
        I create modern websites and digital experiences with beautiful
        interfaces, smooth animations, and high-performance frontend
        architecture.
      </motion.p>

      {/* Buttons */}

      <motion.div
        variants={fadeUp}
        className='mt-10 flex flex-col items-center gap-4
          sm:flex-row sm:justify-center
          lg:justify-start'
      >
        <Button
          asChild
          size='lg'
          className='w-full sm:w-auto'
        >
          <a href='#projects'>View Projects</a>
        </Button>

        <Button
          variant='outline'
          size='lg'
          className='w-full sm:w-auto'
        >
          Download CV
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
