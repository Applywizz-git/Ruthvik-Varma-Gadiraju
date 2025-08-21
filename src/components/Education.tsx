import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    degree: 'M.S., Data Science',
    school: 'Rowan University',
    location: 'NJ, USA',
    // period: '2023-2024',
    icon: '🎓'
  },
  {
    degree: 'B.Tech, Electronics & Communication',
    school: 'KL University', 
    location: 'India',
    // period: '2018-2022',
    icon: '🎓'
  }
];

export const Education: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="education" className="py-10 lg:py-8">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-xl hover-lift"
            >
              <div className="flex items-center gap-6">
                <div className="text-4xl">{edu.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                  <p className="text-primary font-semibold mb-1">{edu.school}</p>
                  <p className="text-muted-foreground text-sm">{edu.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};