// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const projects = [
//   {
//     id: 1,
//     title: 'Suspicious Activity Detection',
//     description: 'Advanced fraud detection system using machine learning with interactive Tableau and D3.js dashboards featuring force-directed networks and timeline views.',
//     image: '/placeholder-project-1.jpg',
//     technologies: ['Tableau', 'D3.js', 'Python', 'REST APIs', 'Machine Learning'],
//     category: 'Analytics',
//     metrics: {
//       accuracy: '94%',
//       processing: '10K+ transactions/hour',
//       reduction: '60% false positives'
//     }
//   },
//   {
//     id: 2,
//     title: 'COVID-19 Forecasting Dashboard',
//     description: 'Comprehensive healthcare analytics platform with predictive models achieving 89% accuracy for hospital capacity planning and resource optimization.',
//     image: '/placeholder-project-2.jpg',
//     technologies: ['Python', 'Prophet', 'Scikit-learn', 'Tableau', 'APIs'],
//     category: 'Healthcare',
//     metrics: {
//       accuracy: '89%',
//       hospitals: '50+ facilities',
//       saved: '$2M+ in resources'
//     }
//   },
//   {
//     id: 3,
//     title: 'Customer Behavior Analysis',
//     description: 'End-to-end customer analytics solution with clustering algorithms for churn prediction and personalized recommendation systems.',
//     image: '/placeholder-project-3.jpg',
//     technologies: ['Python', 'Scikit-learn', 'Power BI', 'SQL', 'Azure'],
//     category: 'E-commerce',
//     metrics: {
//       churn_reduction: '25%',
//       revenue_lift: '15%',
//       segments: '12 customer types'
//     }
//   },
//   {
//     id: 4,
//     title: 'Blood Donation Management System',
//     description: 'Robust database system with normalized schema, RBAC implementation, and real-time availability tracking for healthcare institutions.',
//     image: '/placeholder-project-4.jpg',
//     technologies: ['SQL', 'Database Design', 'ERD', 'MySQL', 'PHP'],
//     category: 'Healthcare',
//     metrics: {
//       availability: '99.9%',
//       response_time: '<200ms',
//       institutions: '25+ hospitals'
//     }
//   },
//   {
//     id: 5,
//     title: 'Supply Chain Optimization',
//     description: 'AI-powered supply chain analytics with real-time monitoring, demand forecasting, and route optimization for logistics efficiency.',
//     image: '/placeholder-project-5.jpg',
//     technologies: ['Python', 'TensorFlow', 'Tableau', 'SAP', 'IoT'],
//     category: 'Logistics',
//     metrics: {
//       efficiency: '+18%',
//       cost_savings: '$500K+',
//       accuracy: '92% demand forecast'
//     }
//   },
//   {
//     id: 6,
//     title: 'IoT Sensor Analytics Platform',
//     description: 'Real-time IoT data processing platform for predictive maintenance with anomaly detection and automated alerting systems.',
//     image: '/placeholder-project-6.jpg',
//     technologies: ['Python', 'Apache Kafka', 'InfluxDB', 'Grafana', 'Machine Learning'],
//     category: 'IoT',
//     metrics: {
//       downtime: '-15%',
//       sensors: '1000+',
//       alerts: '< 5 sec response'
//     }
//   }
// ];

// const categories = ['All', 'Analytics', 'Healthcare', 'E-commerce', 'Logistics', 'IoT'];

// const ProjectCard: React.FC<{ project: typeof projects[0]; index: number }> = ({ project, index }) => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className="group glass rounded-2xl overflow-hidden hover-lift shadow-soft hover:shadow-elegant"
//     >
//       {/* Project Image */}
//       <div className="relative h-48 bg-gradient-primary overflow-hidden">
//         <div className="absolute inset-0 bg-black/20" />
//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.3 }}
//           className="absolute inset-0 flex items-center justify-center text-6xl opacity-50"
//         >
//           {project.category === 'Analytics' && '📊'}
//           {project.category === 'Healthcare' && '🏥'}
//           {project.category === 'E-commerce' && '🛒'}
//           {project.category === 'Logistics' && '🚚'}
//           {project.category === 'IoT' && '📡'}
//         </motion.div>
        
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
//         {/* Action Buttons */}
//         <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <Button size="sm" variant="secondary" className="hover-scale">
//             <ExternalLink className="h-4 w-4" />
//           </Button>
//           <Button size="sm" variant="secondary" className="hover-scale">
//             <Github className="h-4 w-4" />
//           </Button>
//         </div>

//         {/* Category Badge */}
//         <div className="absolute top-4 left-4">
//           <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
//             {project.category}
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
//           {project.title}
//         </h3>
        
//         <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
//           {project.description}
//         </p>

//         {/* Metrics */}
//         <div className="mb-4 space-y-2">
//           {Object.entries(project.metrics).map(([key, value]) => (
//             <div key={key} className="flex justify-between text-xs">
//               <span className="text-muted-foreground capitalize">{key.replace('_', ' ')}:</span>
//               <span className="font-semibold text-primary">{value}</span>
//             </div>
//           ))}
//         </div>

//         {/* Technologies */}
//         <div className="flex flex-wrap gap-2">
//           {project.technologies.map((tech) => (
//             <span
//               key={tech}
//               className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-md border border-accent/20 hover:bg-accent/20 transition-colors"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export const Projects: React.FC = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const filteredProjects = activeCategory === 'All' 
//     ? projects 
//     : projects.filter(project => project.category === activeCategory);

//   const projectsPerPage = 3;
//   const totalSlides = Math.ceil(filteredProjects.length / projectsPerPage);
//   const currentProjects = filteredProjects.slice(
//     currentSlide * projectsPerPage,
//     (currentSlide + 1) * projectsPerPage
//   );

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   return (
//     <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-1/3 right-1/4 w-96 h-96 gradient-accent rounded-full blur-3xl" />
//         <div className="absolute bottom-1/3 left-1/4 w-96 h-96 gradient-violet rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//             <span className="text-foreground">Featured</span>{' '}
//             <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
//           </h2>
//           <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8" />
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Showcasing data-driven solutions that deliver measurable business impact
//           </p>
//         </motion.div>

//         {/* Category Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-3 mb-12"
//         >
//           {categories.map((category) => (
//             <Button
//               key={category}
//               variant={activeCategory === category ? "default" : "outline"}
//               onClick={() => {
//                 setActiveCategory(category);
//                 setCurrentSlide(0);
//               }}
//               className={`hover-scale transition-all duration-300 ${
//                 activeCategory === category
//                   ? 'gradient-primary text-white shadow-glow'
//                   : 'hover:bg-primary/10 hover:text-primary'
//               }`}
//             >
//               {category}
//             </Button>
//           ))}
//         </motion.div>

//         {/* Projects Carousel */}
//         <div className="relative">
//           {/* Navigation Buttons */}
//           {totalSlides > 1 && (
//             <>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={prevSlide}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hover-scale glass"
//               >
//                 <ChevronLeft className="h-4 w-4" />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={nextSlide}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hover-scale glass"
//               >
//                 <ChevronRight className="h-4 w-4" />
//               </Button>
//             </>
//           )}

//           {/* Projects Grid */}
//           <motion.div
//             key={`${activeCategory}-${currentSlide}`}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12"
//           >
//             {currentProjects.map((project, index) => (
//               <ProjectCard key={project.id} project={project} index={index} />
//             ))}
//           </motion.div>

//           {/* Pagination Dots */}
//           {totalSlides > 1 && (
//             <div className="flex justify-center gap-2 mt-8">
//               {Array.from({ length: totalSlides }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentSlide
//                       ? 'bg-primary scale-125'
//                       : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
//                   }`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="text-center mt-16"
//         >
//           <div className="glass p-8 rounded-2xl shadow-soft hover-glow max-w-2xl mx-auto">
//             <h3 className="text-2xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
//               Have a Project in Mind?
//             </h3>
//             <p className="text-muted-foreground mb-6">
//               Let's collaborate to turn your data challenges into strategic advantages
//             </p>
//             <Button
//               size="lg"
//               className="gradient-primary text-white hover-scale hover-glow"
//               onClick={() => {
//                 const contactSection = document.getElementById('contact');
//                 if (contactSection) {
//                   contactSection.scrollIntoView({ behavior: 'smooth' });
//                 }
//               }}
//             >
//               Start a Conversation
//             </Button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Suspicious Activity Detection',
    description: 'Advanced fraud detection system using machine learning with interactive Tableau and D3.js dashboards featuring force-directed networks and timeline views.',
    image: 'src/assets/suspecious.jpeg',
    technologies: ['Tableau', 'D3.js', 'Python', 'REST APIs', 'Machine Learning'],
    category: 'Analytics',
    metrics: {
      accuracy: '94%',
      processing: '10K+ transactions/hour',
      reduction: '60% false positives'
    }
  },
  {
    id: 2,
    title: 'COVID-19 Forecasting Dashboard',
    description: 'Comprehensive healthcare analytics platform with predictive models achieving 89% accuracy for hospital capacity planning and resource optimization.',
    image: 'src/assets/covid.png',
    technologies: ['Python', 'Prophet', 'Scikit-learn', 'Tableau', 'APIs'],
    category: 'Healthcare',
    metrics: {
      accuracy: '89%',
      hospitals: '50+ facilities',
      saved: '$2M+ in resources'
    }
  },
  {
    id: 3,
    title: 'Customer Behavior Analysis',
    description: 'End-to-end customer analytics solution with clustering algorithms for churn prediction and personalized recommendation systems.',
    image: 'src/assets/consumer.jpg',
    technologies: ['Python', 'Scikit-learn', 'Power BI', 'SQL', 'Azure'],
    category: 'E-commerce',
    metrics: {
      churn_reduction: '25%',
      revenue_lift: '15%',
      segments: '12 customer types'
    }
  },
  {
    id: 4,
    title: 'Blood Donation Management System',
    description: 'Robust database system with normalized schema, RBAC implementation, and real-time availability tracking for healthcare institutions.',
    image: 'src/assets/blood.png',
    technologies: ['SQL', 'Database Design', 'ERD', 'MySQL', 'PHP'],
    category: 'Healthcare',
    metrics: {
      availability: '99.9%',
      response_time: '<200ms',
      institutions: '25+ hospitals'
    }
  },
  {
    id: 5,
    title: 'Supply Chain Optimization',
    description: 'AI-powered supply chain analytics with real-time monitoring, demand forecasting, and route optimization for logistics efficiency.',
    image: 'src/assets/supplychain.png',
    technologies: ['Python', 'TensorFlow', 'Tableau', 'SAP', 'IoT'],
    category: 'Logistics',
    metrics: {
      efficiency: '+18%',
      cost_savings: '$500K+',
      accuracy: '92% demand forecast'
    }
  },
  {
    id: 6,
    title: 'IoT Sensor Analytics Platform',
    description: 'Real-time IoT data processing platform for predictive maintenance with anomaly detection and automated alerting systems.',
    image: 'src/assets/iot.jpg',
    technologies: ['Python', 'Apache Kafka', 'InfluxDB', 'Grafana', 'Machine Learning'],
    category: 'IoT',
    metrics: {
      downtime: '-15%',
      sensors: '1000+',
      alerts: '< 5 sec response'
    }
  }
];

const categories = ['All', 'Analytics', 'Healthcare', 'E-commerce', 'Logistics', 'IoT'];

const ProjectCard: React.FC<{ project: typeof projects[0]; index: number }> = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [isFrozen, setIsFrozen] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1 }}
      className="group glass rounded-2xl overflow-hidden hover-lift shadow-soft hover:shadow-elegant"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          initial={{ scale: 1 }}
          animate={isFrozen ? { scale: 1.05 } : { scale: [1, 1.05, 1] }}
          transition={
            isFrozen
              ? { duration: 0.4, ease: 'easeOut' }
              : { repeat: Infinity, repeatType: 'mirror', duration: 3, ease: 'easeInOut' }
          }
          onClick={() => setIsFrozen(!isFrozen)}
          className="w-full h-full object-cover cursor-pointer"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="mb-4 space-y-2">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-xs">
              <span className="text-muted-foreground capitalize">{key.replace('_', ' ')}:</span> &nbsp;
              <span className="font-semibold text-primary">{value}</span>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-md border border-accent/20 hover:bg-accent/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const projectsPerPage = 3;
  const totalSlides = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    currentSlide * projectsPerPage,
    (currentSlide + 1) * projectsPerPage
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // ✅ Auto carousel effect
  // useEffect(() => {
  //   if (totalSlides > 1) {
  //     const interval = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % totalSlides);
  //     }, 3000); // auto-change every 3s
  //     return () => clearInterval(interval);
  //   }
  // }, [totalSlides]);

  return (
    <section id="projects" className="py-10 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 gradient-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 gradient-violet rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Featured</span>{' '}
            <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing data-driven solutions that deliver measurable business impact
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => {
                setActiveCategory(category);
                setCurrentSlide(0);
              }}
              className={`hover-scale transition-all duration-300 ${
                activeCategory === category
                  ? 'gradient-primary text-white shadow-glow'
                  : 'hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hover-scale glass"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hover-scale glass"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}

          {/* Projects Grid */}
          <motion.div
            key={`${activeCategory}-${currentSlide}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12"
          >
            {currentProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* Pagination Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl shadow-soft hover-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
              Have a Project in Mind?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to turn your data challenges into strategic advantages
            </p>
            <Button
              size="lg"
              className="gradient-primary text-white hover-scale hover-glow"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start a Conversation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
