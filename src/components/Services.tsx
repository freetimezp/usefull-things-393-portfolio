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
      className='mt-40 scroll-mt-24'
    >
      <SectionHeader
        subtitle='Services'
        title='Building with Purpose & Precision.'
      />

      <div className='mt-16 space-y-6'>
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
