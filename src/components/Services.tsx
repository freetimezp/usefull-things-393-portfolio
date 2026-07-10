import { motion } from 'motion/react';

import { staggerContainer } from '@/lib/animations';

import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';

import { services } from '@/data/data';

const Services = () => {
  return (
    <motion.section
      id='services'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0.12)}
      className='
        mt-20
        scroll-mt-24

        sm:mt-24
        lg:mt-32
        xl:mt-40
      '
    >
      <SectionHeader
        subtitle='Services'
        title='Building with Purpose & Precision.'
      />

      <div
        className='
          mt-8
          space-y-4

          sm:mt-10
          sm:space-y-5

          lg:mt-14
          lg:space-y-6

          xl:mt-16
        '
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
