// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const skillCategories = [
//   {
//     title: 'Programming & Query',
//     icon: '💻',
//     skills: [
//       { name: 'Python', level: 95, color: 'text-primary' },
//       { name: 'SQL', level: 98, color: 'text-accent' },
//       { name: 'R', level: 85, color: 'text-violet' },
//       { name: 'JavaScript', level: 80, color: 'text-primary' }
//     ]
//   },
//   {
//     title: 'BI & Visualization',
//     icon: '📊',
//     skills: [
//       { name: 'Power BI', level: 92, color: 'text-primary' },
//       { name: 'Tableau', level: 90, color: 'text-accent' },
//       { name: 'D3.js', level: 85, color: 'text-violet' },
//       { name: 'Looker Studio', level: 88, color: 'text-primary' }
//     ]
//   },
//   {
//     title: 'Databases & Warehousing',
//     icon: '🗄️',
//     skills: [
//       { name: 'MySQL', level: 95, color: 'text-primary' },
//       { name: 'PostgreSQL', level: 90, color: 'text-accent' },
//       { name: 'Snowflake', level: 85, color: 'text-violet' },
//       { name: 'BigQuery', level: 88, color: 'text-primary' }
//     ]
//   },
//   {
//     title: 'ML & Analytics',
//     icon: '🤖',
//     skills: [
//       { name: 'Scikit-learn', level: 90, color: 'text-primary' },
//       { name: 'TensorFlow', level: 85, color: 'text-accent' },
//       { name: 'Forecasting', level: 92, color: 'text-violet' },
//       { name: 'NLP', level: 80, color: 'text-primary' }
//     ]
//   },
//   {
//     title: 'Cloud & Big Data',
//     icon: '☁️',
//     skills: [
//       { name: 'AWS', level: 88, color: 'text-primary' },
//       { name: 'Azure', level: 85, color: 'text-accent' },
//       { name: 'Apache Airflow', level: 80, color: 'text-violet' },
//       { name: 'dbt', level: 82, color: 'text-primary' }
//     ]
//   },
//   {
//     title: 'Tools & Platforms',
//     icon: '🛠️',
//     skills: [
//       { name: 'Git/GitHub', level: 90, color: 'text-primary' },
//       { name: 'Jupyter', level: 95, color: 'text-accent' },
//       { name: 'Excel', level: 92, color: 'text-violet' },
//       { name: 'SAP', level: 85, color: 'text-primary' }
//     ]
//   }
// ];

// interface CircularProgressProps {
//   percentage: number;
//   size: number;
//   strokeWidth: number;
//   color: string;
//   delay: number;
// }

// const CircularProgress: React.FC<CircularProgressProps> = ({ 
//   percentage, 
//   size, 
//   strokeWidth, 
//   color,
//   delay 
// }) => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
//   const [animatedPercentage, setAnimatedPercentage] = React.useState(0);

//   React.useEffect(() => {
//     if (inView) {
//       const timer = setTimeout(() => {
//         const interval = setInterval(() => {
//           setAnimatedPercentage(prev => {
//             if (prev < percentage) {
//               return Math.min(prev + 2, percentage);
//             }
//             clearInterval(interval);
//             return percentage;
//           });
//         }, 30);
//       }, delay);
//       return () => clearTimeout(timer);
//     }
//   }, [inView, percentage, delay]);

//   const radius = (size - strokeWidth) / 2;
//   const circumference = radius * 2 * Math.PI;
//   const strokeDasharray = circumference;
//   const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

//   return (
//     <div ref={ref} className="relative">
//       <svg width={size} height={size} className="transform -rotate-90">
//         {/* Background circle */}
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           stroke="currentColor"
//           strokeWidth={strokeWidth}
//           fill="transparent"
//           className="text-muted/20"
//         />
//         {/* Progress circle */}
//         <motion.circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           stroke="currentColor"
//           strokeWidth={strokeWidth}
//           fill="transparent"
//           strokeDasharray={strokeDasharray}
//           strokeDashoffset={strokeDashoffset}
//           strokeLinecap="round"
//           className={color}
//           style={{
//             filter: 'drop-shadow(0 0 6px currentColor)'
//           }}
//           initial={{ strokeDashoffset: circumference }}
//           animate={{ strokeDashoffset }}
//           transition={{ duration: 1.5, ease: "easeInOut", delay: delay / 1000 }}
//         />
//       </svg>
//       {/* Percentage text */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <span className={`text-sm font-bold ${color}`}>
//           {animatedPercentage}%
//         </span>
//       </div>
//     </div>
//   );
// };

// const SkillCategory: React.FC<{ 
//   category: typeof skillCategories[0]; 
//   index: number 
// }> = ({ category, index }) => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className="glass p-8 rounded-2xl shadow-soft hover-glow group hover-lift"
//     >
//       {/* Category Header */}
//       <div className="text-center mb-8">
//         <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
//           {category.icon}
//         </div>
//         <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
//           {category.title}
//         </h3>
//       </div>

//       {/* Skills Grid */}
//       <div className="grid grid-cols-2 gap-6">
//         {category.skills.map((skill, skillIndex) => (
//           <motion.div
//             key={skill.name}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={inView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ 
//               duration: 0.4, 
//               delay: index * 0.1 + skillIndex * 0.1 
//             }}
//             className="flex flex-col items-center space-y-3"
//           >
//             <CircularProgress
//               percentage={skill.level}
//               size={80}
//               strokeWidth={6}
//               color={skill.color}
//               delay={index * 100 + skillIndex * 50}
//             />
//             <span className="text-sm font-medium text-center">{skill.name}</span>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export const Skills: React.FC = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

//   return (
//     <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `
//             radial-gradient(circle at 20% 20%, hsl(var(--primary)) 2px, transparent 2px),
//             radial-gradient(circle at 80% 80%, hsl(var(--accent)) 2px, transparent 2px),
//             radial-gradient(circle at 40% 60%, hsl(var(--violet)) 2px, transparent 2px)
//           `,
//           backgroundSize: '100px 100px, 150px 150px, 80px 80px'
//         }} />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//             <span className="text-foreground">Technical</span>{' '}
//             <span className="gradient-primary bg-clip-text text-transparent">Expertise</span>
//           </h2>
//           <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8" />
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Comprehensive skill set spanning the entire data science lifecycle
//           </p>
//         </motion.div>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skillCategories.map((category, index) => (
//             <SkillCategory key={category.title} category={category} index={index} />
//           ))}
//         </div>

//         {/* Skill Summary */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="mt-20"
//         >
//           <div className="glass p-8 rounded-2xl shadow-soft hover-glow">
//             <div className="grid md:grid-cols-3 gap-8 text-center">
//               <div>
//                 <h4 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
//                   15+
//                 </h4>
//                 <p className="text-muted-foreground">Core Technologies</p>
//               </div>
//               <div>
//                 <h4 className="text-3xl font-bold gradient-accent bg-clip-text text-transparent mb-2">
//                   6+
//                 </h4>
//                 <p className="text-muted-foreground">Specialized Domains</p>
//               </div>
//               <div>
//                 <h4 className="text-3xl font-bold gradient-violet bg-clip-text text-transparent mb-2">
//                   90%+
//                 </h4>
//                 <p className="text-muted-foreground">Average Proficiency</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Continuous Learning */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 1.0 }}
//           className="mt-12 text-center"
//         >
//           <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full">
//             <span className="text-2xl">🚀</span>
//             <span className="text-sm font-medium text-muted-foreground">
//               Constantly evolving with the latest data science innovations
//             </span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Programming & Query',
    icon: '💻',
    skills: [
      { name: 'Python', level: 95, color: 'text-primary' },
      { name: 'SQL (MySQL, PostgreSQL)', level: 98, color: 'text-accent' },
      { name: 'R', level: 80, color: 'text-violet' },
      { name: 'JavaScript', level: 75, color: 'text-primary' }
    ]
  },
  {
    title: 'BI & Visualization',
    icon: '📊',
    skills: [
      { name: 'Power BI', level: 93, color: 'text-primary' },
      { name: 'Tableau', level: 92, color: 'text-accent' },
      { name: 'D3.js', level: 85, color: 'text-violet' },
      { name: 'Looker Studio', level: 80, color: 'text-primary' }
    ]
  },
  {
    title: 'Databases & Warehousing',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 95, color: 'text-primary' },
      { name: 'PostgreSQL', level: 90, color: 'text-accent' },
      { name: 'Snowflake', level: 85, color: 'text-violet' },
      { name: 'BigQuery', level: 88, color: 'text-primary' }
    ]
  },
  {
    title: 'ML & Analytics',
    icon: '🤖',
    skills: [
      { name: 'Scikit-learn', level: 90, color: 'text-primary' },
      { name: 'TensorFlow', level: 82, color: 'text-accent' },
      { name: 'Forecasting (Time Series)', level: 92, color: 'text-violet' },
      { name: 'NLP', level: 80, color: 'text-primary' }
    ]
  },
  {
    title: 'Cloud & Big Data',
    icon: '☁️',
    skills: [
      { name: 'AWS (S3, RDS, Redshift)', level: 88, color: 'text-primary' },
      { name: 'Azure', level: 85, color: 'text-accent' },
      { name: 'Apache Airflow', level: 82, color: 'text-violet' },
      { name: 'dbt', level: 80, color: 'text-primary' }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git/GitHub', level: 90, color: 'text-primary' },
      { name: 'Jupyter / Notebooks', level: 95, color: 'text-accent' },
      { name: 'Excel (Advanced)', level: 92, color: 'text-violet' },
      { name: 'SAP (EWM/TM)', level: 85, color: 'text-primary' }
    ]
  }
];

interface CircularProgressProps {
  percentage: number;
  size: number;
  strokeWidth: number;
  color: string;
  delay: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ 
  percentage, 
  size, 
  strokeWidth, 
  color,
  delay 
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [animatedPercentage, setAnimatedPercentage] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedPercentage(prev => {
            if (prev < percentage) {
              return Math.min(prev + 2, percentage);
            }
            clearInterval(interval);
            return percentage;
          });
        }, 30);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage, delay]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div ref={ref} className="relative">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-muted/20"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={color}
          style={{ filter: 'drop-shadow(0 0 6px currentColor)' }}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: delay / 1000 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-sm font-bold ${color}`}>
          {animatedPercentage}%
        </span>
      </div>
    </div>
  );
};

const SkillCategory: React.FC<{ 
  category: typeof skillCategories[0]; 
  index: number 
}> = ({ category, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass p-8 rounded-2xl shadow-soft hover-glow group hover-lift"
    >
      <div className="text-center mb-8">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {category.title}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.1 + skillIndex * 0.1 
            }}
            className="flex flex-col items-center space-y-3"
          >
            <CircularProgress
              percentage={skill.level}
              size={80}
              strokeWidth={6}
              color={skill.color}
              delay={index * 100 + skillIndex * 50}
            />
            <span className="text-sm font-medium text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="skills" className="py-10 lg:py-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, hsl(var(--primary)) 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, hsl(var(--accent)) 2px, transparent 2px),
            radial-gradient(circle at 40% 60%, hsl(var(--violet)) 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px, 150px 150px, 80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Technical</span>{' '}
            <span className="gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning the entire data science lifecycle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="glass p-8 rounded-2xl shadow-soft hover-glow">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  15+
                </h4>
                <p className="text-muted-foreground">Core Technologies</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold gradient-accent bg-clip-text text-transparent mb-2">
                  6+
                </h4>
                <p className="text-muted-foreground">Specialized Domains</p>
              </div>
             <div>
                <h4 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  90%+
                </h4>
                <p className="text-muted-foreground">Average Proficiency</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 text-center"
        >
          {/* <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full">
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-medium text-muted-foreground">
              Constantly evolving with the latest data science innovations
            </span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};
