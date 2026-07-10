import { motion } from 'motion/react';
import { SparkleIcon } from 'lucide-react';

import { fadeUp } from '@/lib/animations';

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <>
      <motion.p
        variants={fadeUp}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className='flex mb-6 lg:m-0 items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm
            w-32'
      >
        <SparkleIcon size={15} /> {subtitle}
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className='text-4xl font-bold capitalize mt-2 md:max-w-3xl'
      >
        {title}
      </motion.h2>
    </>
  );
};

export default SectionHeader;
