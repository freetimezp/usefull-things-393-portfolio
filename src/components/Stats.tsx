import { animate, motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { FolderOpen, Users, Award } from 'lucide-react';

import { staggerContainer, fadeUp } from '@/lib/animations';

const stats = [
  {
    number: 120,
    suffix: '+',
    label: 'Projects Completed',
    icon: FolderOpen,
  },
  {
    number: 65,
    suffix: '+',
    label: 'Happy Clients',
    icon: Users,
  },
  {
    number: 8,
    suffix: '+',
    label: 'Years Experience',
    icon: Award,
  },
];

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const Stats = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.35 }}
      variants={staggerContainer(0.15)}
      className='
        mt-20
        grid
        gap-5

        sm:mt-24
        md:grid-cols-2
        lg:mt-32
        lg:grid-cols-3
        lg:gap-8
      '
    >
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.article
            key={index}
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            transition={{
              duration: 0.35,
            }}
            className='
              stat-card 
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl

              p-6
              sm:p-7
              lg:p-8
            '
          >
            {/* Hover Glow */}

            <div
              className='
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
                bg-gradient-to-br
                from-primary/15
                via-primary/5
                to-transparent
              '
            />

            {/* Background Number */}

            <span
              className='
                pointer-events-none
                absolute
                right-3
                top-1

                select-none
                font-black
                leading-none

                text-[70px]
                text-white/5

                sm:text-[90px]
                lg:right-4
                lg:text-[120px]
              '
            >
              {item.number}
            </span>

            {/* Accent Line */}

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className='
                mb-6
                h-0.5

                w-10
                sm:w-12
                lg:w-14

                origin-left
                bg-primary
              '
            />

            {/* Icon */}

            <div
              className='
                mb-5
                flex
                items-center
                justify-center

                h-12
                w-12

                rounded-2xl

                bg-primary/10
                text-primary

                sm:h-14
                sm:w-14
                lg:h-16
                lg:w-16
              '
            >
              <Icon className='h-6 w-6 lg:h-7 lg:w-7' />
            </div>

            {/* Counter */}

            <h3
              className='
                font-bold
                tracking-tight

                text-4xl
                sm:text-5xl
                lg:text-6xl
              '
            >
              <Counter
                value={item.number}
                suffix={item.suffix}
              />
            </h3>

            {/* Label */}

            <p
              className='
                mt-3

                text-xs
                uppercase
                tracking-[0.18em]

                text-neutral-400

                sm:text-sm
                sm:tracking-[0.22em]
                lg:tracking-[0.28em]
              '
            >
              {item.label}
            </p>

            {/* Glow */}

            <div
              className='
                absolute
                left-1/2
                -bottom-20

                h-32
                w-32

                -translate-x-1/2
                rounded-full

                bg-primary/20
                blur-3xl

                opacity-0
                transition-opacity
                duration-500

                group-hover:opacity-100

                lg:h-40
                lg:w-40
              '
            />
          </motion.article>
        );
      })}
    </motion.section>
  );
};

export default Stats;
