import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Arthicus Global',
    role: 'Data Analyst',
    period: 'May 2022 – May 2023',
    // location: 'Remote',
    highlights: [
      'Analyzed SAP EWM/TM to uncover stock-turnover & lead-time issues → +18% efficiency',
      'Built Power BI/Tableau dashboards across logistics & procurement → −35% manual reporting',
      'Automated SAP/vendor API ingestion with Python ETL → 99% data accuracy; 20+ hrs/week saved',
      'RF scanner/warehouse flow analysis → 22% shorter travel paths; REST tracking → 15% faster vendor comms'
    ],
    technologies: ['Power BI', 'Tableau', 'Python', 'SAP EWM/TM', 'REST APIs', 'ETL']
  },
  {
    id: 2,
    company: 'Entuple Technologies',
    role: 'Data Analyst',
    period: '2021 – 2022',
    // location: 'India',
    highlights: [
      'Processed IoT sensor data to detect abnormal machine behavior → −15% downtime',
      'Time-series models to anticipate failures → −20% breakdowns; live Tableau monitoring',
      'API-enriched datasets → +10% model accuracy; automated ETL → −70% manual effort'
    ],
    technologies: ['Tableau', 'IoT Analytics', 'Time-series Analysis', 'Python', 'Machine Learning', 'APIs']
  }
];

const ExperienceCard: React.FC<{ 
  experience: typeof experiences[0]; 
  index: number; 
  isLeft: boolean 
}> = ({ experience, index, isLeft }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      className={`relative flex ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
    >
      {/* Timeline Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none lg:mx-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
          className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow pulse-glow"
        />
      </div>

      {/* Content Card */}
      <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="glass p-8 rounded-2xl shadow-soft hover-glow relative overflow-hidden group"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">{experience.role}</h3>
              <h4 className="text-xl text-primary font-semibold mb-3">{experience.company}</h4>
              
             <div className={`flex items-center gap-4 text-sm text-muted-foreground ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  {/* <MapPin className="h-4 w-4" /> */}
                  {/* <span>{experience.location}</span> */}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-6">
              {experience.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.3 + 0.4 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <TrendingUp className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                </motion.div>
              ))}
            </div>

            {/* Technologies */}
            <div className={`flex flex-wrap gap-2 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
              {experience.technologies.map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.3 + 0.6 + idx * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="experience" className="py-10 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 gradient-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 gradient-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Professional</span>{' '}
            <span className="text-foreground">Experience</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of data-driven impact across supply chain optimization and IoT analytics
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-violet hidden lg:block" />
          
          {/* Experience Cards */}
          <div className="space-y-16 lg:space-y-24">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass p-8 rounded-2xl shadow-soft hover-glow max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-accent bg-clip-text text-transparent">
              Impact Summary
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Data Accuracy Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Hours/Week Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet mb-2">70%</div>
                <div className="text-sm text-muted-foreground">Manual Effort Reduced</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};