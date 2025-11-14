import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';

import SectionHeader from '@/components/SectionHeader';
import ExpCard from '@/components/ExpCard';
import ToolsCard from '@/components/ToolsCard';

import { education, experience, tools } from '@/data/data';

const Resume = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='resume'
    >
      <SectionHeader
        subtitle='Resume'
        title='Education & Work experience'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300 text-justify'
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
        laudantium magnam, consequuntur asperiores culpa dolore totam sapiente
        iure corporis rem deserunt fuga quisquam expedita cupiditate nihil
        similique possimus rerum cumque ab eius, laboriosam perferendis! Quae
        praesentium, ullam tempora dolorum maiores aliquid. Quae pariatur vel
        eos.
      </motion.p>

      <div className='grid gap-x-10 my-16 md:grid-cols-2'>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl font-semibold mb-8'>Education</h2>

          <div className='space-y-8 border-l border-neutral-700 pl-6'>
            {education.map((item, i) => (
              <ExpCard
                key={i}
                item={item}
              />
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className='text-3xl font-semibold mb-8'>Work Experience</h2>

          <div className='space-y-8 border-l border  pl-6'>
            {experience.map((item, i) => (
              <ExpCard
                key={i}
                item={item}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className='my-16'>
        <motion.h2
          variants={fadeUp}
          className='text-3xl font-semibold mb-8 capitalize'
        >
          My favorite tools
        </motion.h2>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.5)}
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5'
        >
          {tools.map((tool, i) => (
            <ToolsCard
              key={i}
              tool={tool}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
