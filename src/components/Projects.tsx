import { motion } from 'motion/react';

import { staggerContainer } from '@/lib/animations';

import { projectsData } from '@/data/data';

import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  return (
    <motion.section
      id='projects'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer(0.12)}
      className='
        mt-20
        scroll-mt-24

        sm:mt-24
        lg:mt-32
      '
    >
      <SectionHeader
        subtitle='Projects'
        title='My featured projects'
      />

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer(0.15)}
        className='
          mt-8

          grid
          grid-cols-1

          gap-6

          sm:mt-10
          sm:gap-8

          lg:grid-cols-2
          lg:gap-10
        '
      >
        {projectsData.map((project, i) => (
          <ProjectCard
            key={i}
            imgSrc={project.imgSrc}
            projectLink={project.projectLink}
            tags={project.tags}
            title={project.title}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
