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
      className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-32'
    >
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{
              duration: 0.35,
            }}
            className='stat-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3
              backdrop-blur-xl p-8'
          >
            {/* Hover gradient */}
            <div
              className='absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100
              bg-linear-to-br from-primary/15 via-primary/5 to-transparent'
            />

            {/* Giant Number */}
            <span
              className='absolute right-4 top-0 text-[110px] font-black leading-none text-white/3
              pointer-events-none select-none'
            >
              {item.number}
            </span>

            {/* Top line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className='origin-left mb-8 h-0.5 w-14 bg-primary'
            />

            {/* Icon */}
            <div className='mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <Icon size={28} />
            </div>

            {/* Number */}
            <h3 className='text-5xl font-bold tracking-tight'>
              <Counter
                value={item.number}
                suffix={item.suffix}
              />
            </h3>

            {/* Label */}
            <p className='mt-3 text-sm uppercase tracking-[0.25em] text-neutral-400'>
              {item.label}
            </p>

            {/* Bottom Glow */}
            <div
              className='absolute -bottom-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/20
              blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100'
            />
          </motion.div>
        );
      })}
    </motion.section>
  );
};

export default Stats;
