import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Mail, MapPin, Clock3, ArrowUpRight } from 'lucide-react';

import { fadeUp, staggerContainer } from '@/lib/animations';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import SectionHeader from '@/components/SectionHeader';

type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const info = [
  {
    icon: <Mail size={22} />,
    title: 'Email',
    value: 'hello@email.com',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Location',
    value: 'Remote / Worldwide',
  },
  {
    icon: <Clock3 size={22} />,
    title: 'Response Time',
    value: 'Usually within 24 hours',
  },
];

const Contact = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
  };

  return (
    <motion.section
      id='contact'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0.15)}
      className='mt-40 pb-32 scroll-mt-24'
    >
      <SectionHeader
        subtitle='Contact'
        title="Let's build something amazing together."
      />

      <div className='mt-16 grid gap-14 lg:grid-cols-[0.8fr_1.2fr]'>
        {/* LEFT */}

        <motion.div variants={fadeUp}>
          <p className='text-neutral-400 leading-8'>
            Have an idea, startup, or product that deserves exceptional design
            and development? Let's discuss how we can create something memorable
            together.
          </p>

          <div className='mt-12 space-y-5'>
            {info.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  x: 8,
                }}
                className='group relative overflow-hidden rounded-3xl border border-white/10
                bg-white/3 p-6 backdrop-blur-xl
                '
              >
                <div
                  className='absolute inset-0 opacity-0 transition duration-500
                  group-hover:opacity-100 bg-linear-to-r from-primary/10 to-transparent
                  '
                />

                <div className='relative flex items-center gap-5'>
                  <div
                    className='
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                    '
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className='text-sm uppercase tracking-[0.25em] text-neutral-500'>
                      {item.title}
                    </p>

                    <h3 className='mt-1 font-semibold'>{item.value}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          variants={fadeUp}
          className='rounded-4xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl'
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-5'
            >
              <div className='grid gap-5 md:grid-cols-2'>
                {[
                  {
                    name: 'name',
                    placeholder: 'Your name',
                  },
                  {
                    name: 'company',
                    placeholder: 'Company',
                  },
                  {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email',
                  },
                  {
                    name: 'phone',
                    placeholder: 'Phone',
                  },
                ].map((fieldData) => (
                  <FormField
                    key={fieldData.name}
                    control={form.control}
                    name={fieldData.name as keyof ContactFormValues}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type={fieldData.type}
                            placeholder={fieldData.placeholder}
                            className='h-12 rounded-xl border-white/10 bg-white/5 focus-visible:ring-primary'
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder='Tell me about your project...'
                        className='min-h-[180px] rounded-xl border-white/10 bg-white/5
                          focus-visible:ring-primary'
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                size='lg'
                className='group w-full md:w-auto'
              >
                Send Message
                <ArrowUpRight
                  size={18}
                  className='transition-transform group-hover:translate-x-1 group-hover:-translate-y-1'
                />
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
