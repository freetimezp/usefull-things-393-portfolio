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
      className='
      mt-20
      scroll-mt-24

      sm:mt-24
      lg:mt-32
    '
      id='resume'
    >
      <SectionHeader
        subtitle='Resume'
        title='Education & Work experience'
      />

      <motion.p
        variants={fadeUp}
        className='
        mt-6
        max-w-4xl
        text-sm
        leading-7
        text-neutral-400

        sm:text-base
        sm:leading-8
      '
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
        laudantium magnam, consequuntur asperiores culpa dolore totam sapiente
        iure corporis rem deserunt fuga quisquam expedita cupiditate nihil
        similique possimus rerum cumque ab eius, laboriosam perferendis! Quae
        praesentium, ullam tempora dolorum maiores aliquid. Quae pariatur vel
        eos.
      </motion.p>

      <div
        className='
          mt-12
          grid
          gap-12

          lg:mt-16
          lg:grid-cols-2
          lg:gap-10
        '
      >
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2
            className='
              mb-6
              text-2xl
              font-semibold

              sm:text-3xl
              lg:mb-8
            '
          >
            Education
          </h2>

          <div
            className='
              space-y-6

              border-l
              border-white/10

              pl-5

              sm:space-y-8
              sm:pl-6
            '
          >
            {education.map((item, i) => (
              <ExpCard
                key={i}
                item={item}
              />
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2
            className='
              mb-6
              text-2xl
              font-semibold

              sm:text-3xl
              lg:mb-8
            '
          >
            Work Experience
          </h2>

          <div
            className='
              space-y-6

              border-l
              border-white/10

              pl-5

              sm:space-y-8
              sm:pl-6
            '
          >
            {experience.map((item, i) => (
              <ExpCard
                key={i}
                item={item}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div
        className='
          mt-16

          sm:mt-20

          lg:mt-24
        '
      >
        <motion.h2
          variants={fadeUp}
          className='
          mb-6
          text-2xl
          font-semibold
          capitalize

          sm:text-3xl
          lg:mb-8
        '
        >
          My favorite tools
        </motion.h2>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.5)}
          className='
          grid

          grid-cols-2

          gap-4

          sm:grid-cols-3
          sm:gap-5

          lg:grid-cols-4
          xl:grid-cols-5
        '
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
