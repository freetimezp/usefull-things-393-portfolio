import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';

import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Creative ideas convert into web interfaces'
      />

      <motion.p className='mt-4 text-neutral-300 text-justify'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        consequuntur nobis vero error magni consequatur modi. Explicabo sit
        consectetur, corrupti iure voluptas amet eligendi repudiandae molestiae
        inventore doloribus consequuntur. Tempore eum vitae soluta suscipit
        distinctio quo sunt cum voluptatum amet sed labore illo ducimus neque,
        veritatis adipisci ab. Nobis, corporis.
      </motion.p>

      <motion.p className='mt-2 text-neutral-300 text-justify'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        consequuntur nobis vero error magni consequatur modi. Explicabo sit
        consectetur, corrupti iure voluptas amet eligendi repudiandae molestiae
        inventore doloribus consequuntur. Tempore eum vitae soluta suscipit
        distinctio quo sunt cum voluptatum amet sed labore illo ducimus neque,
        veritatis adipisci ab. Nobis, corporis.Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Distinctio, consequuntur nobis vero error
        magni consequatur modi. Explicabo sit consectetur, corrupti iure
        voluptas amet eligendi repudiandae molestiae inventore doloribus
        consequuntur. Tempore eum vitae soluta suscipit distinctio quo sunt cum
        voluptatum amet sed labore illo ducimus neque, veritatis adipisci ab.
        Nobis, corporis.
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button className='mt-5'>Contact Me</Button>
      </motion.div>
    </motion.section>
  );
};

export default About;
