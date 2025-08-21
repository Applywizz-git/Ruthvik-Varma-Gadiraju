// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// interface CounterProps {
//   end: number;
//   suffix: string;
//   label: string;
// }

// const Counter: React.FC<CounterProps> = ({ end, suffix, label }) => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
//   const [count, setCount] = React.useState(0);

//   React.useEffect(() => {
//     if (inView) {
//       const timer = setInterval(() => {
//         setCount(prev => {
//           if (prev < end) {
//             return Math.min(prev + Math.ceil(end / 50), end);
//           }
//           clearInterval(timer);
//           return end;
//         });
//       }, 50);
//       return () => clearInterval(timer);
//     }
//   }, [inView, end]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={inView ? { opacity: 1, scale: 1 } : {}}
//       transition={{ duration: 0.6 }}
//       className="text-center p-6 glass rounded-lg hover-lift"
//     >
//       <div className="text-3xl lg:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
//         {count}{suffix}
//       </div>
//       <div className="text-sm text-muted-foreground">{label}</div>
//     </motion.div>
//   );
// };

// const skills = [
//   { name: 'SQL & Python', level: 95 },
//   { name: 'Power BI & Tableau', level: 90 },
//   { name: 'Machine Learning', level: 85 },
//   { name: 'Cloud Platforms', level: 80 },
// ];

// const SkillBar: React.FC<{ skill: { name: string; level: number }; index: number }> = ({ skill, index }) => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: -50 }}
//       animate={inView ? { opacity: 1, x: 0 } : {}}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className="mb-6"
//     >
//       <div className="flex justify-between mb-2">
//         <span className="text-sm font-medium">{skill.name}</span>
//         <span className="text-sm text-muted-foreground">{skill.level}%</span>
//       </div>
//       <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
//         <motion.div
//           initial={{ width: 0 }}
//           animate={inView ? { width: `${skill.level}%` } : {}}
//           transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
//           className="h-full gradient-primary rounded-full relative"
//         >
//           <motion.div
//             animate={{ x: [-100, 100, -100] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
//           />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export const About: React.FC = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

//   return (
//     <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px)`,
//           backgroundSize: '50px 50px'
//         }} />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//             <span className="gradient-primary bg-clip-text text-transparent">About Me</span>
//           </h2>
//           <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8" />
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side - Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <div className="space-y-6 text-lg leading-relaxed">
//               <p className="text-muted-foreground">
//                 Detail-oriented <span className="text-primary font-semibold">Data Analyst</span> skilled in 
//                 SQL, Python, and advanced BI (Power BI, Tableau, D3.js). I design KPI-driven dashboards, 
//                 automate pipelines, and integrate SAP EWM/TM, IoT streams, and multi-source APIs for 
//                 faster decisions.
//               </p>
//               <p className="text-muted-foreground">
//                 I focus on robust data models, meaningful metrics, and clear stakeholder communication 
//                 to ship scalable, business-impacting solutions. My experience spans supply chain 
//                 optimization, predictive analytics, and real-time monitoring systems.
//               </p>
//             </div>

//             {/* Skills Progress */}
//             <div className="mt-12">
//               <h3 className="text-xl font-semibold mb-6 text-foreground">Key Competencies</h3>
//               <div>
//                 {skills.map((skill, index) => (
//                   <SkillBar key={skill.name} skill={skill} index={index} />
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Side - Stats & Highlights */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             {/* Animated Counters */}
//             <div className="grid grid-cols-2 gap-6 mb-12">
//               <Counter end={2} suffix="+" label="Years Experience" />
//               <Counter end={89} suffix="%" label="Forecast Accuracy" />
//               <Counter end={18} suffix="%" label="Ops Efficiency Gain" />
//               <Counter end={35} suffix="%" label="Reporting Time Saved" />
//             </div>

//             {/* Highlight Cards */}
//             <div className="space-y-4">
//               {[
//                 {
//                   icon: '🚀',
//                   title: 'Performance Optimization',
//                   description: 'Reduced manual reporting by 35% through automation'
//                 },
//                 {
//                   icon: '🎯',
//                   title: 'Predictive Analytics',
//                   description: 'Achieved 89% forecast accuracy in demand planning'
//                 },
//                 {
//                   icon: '⚡',
//                   title: 'Process Innovation',
//                   description: 'Improved operational efficiency by 18% via data insights'
//                 },
//                 {
//                   icon: '🔍',
//                   title: 'Data Integration',
//                   description: 'Seamlessly connected SAP, IoT, and API data sources'
//                 }
//               ].map((item, index) => (
//                 <motion.div
//                   key={item.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
//                   className="flex items-center p-4 glass rounded-lg hover-lift group"
//                 >
//                   <div className="text-2xl mr-4 group-hover:scale-110 transition-transform">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
//                     <p className="text-sm text-muted-foreground">{item.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ end, suffix, label }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev < end) {
            return Math.min(prev + Math.ceil(end / 50), end);
          }
          clearInterval(timer);
          return end;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center p-6 glass rounded-lg hover-lift"
    >
      <div className="text-3xl lg:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
};

const skills = [
  { name: 'SQL, Python & R', level: 95 },
  { name: 'Power BI, Tableau & D3.js', level: 90 },
  { name: 'Machine Learning & Forecasting', level: 85 },
  { name: 'Cloud & Big Data Platforms', level: 80 },
];

const SkillBar: React.FC<{ skill: { name: string; level: number }; index: number }> = ({ skill, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          className="h-full gradient-primary rounded-full relative"
        >
          <motion.div
            animate={{ x: [-100, 100, -100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-10 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Detail-oriented <span className="text-primary font-semibold">Data Analyst</span> with an M.S. in Data Science and 
                experience in supply chain, IoT, CRM, and e-commerce domains. Skilled at transforming complex datasets 
                into actionable insights using <strong>SQL, Python and React.js tools</strong> like Power BI, Tableau, and D3.js.
              </p>
              <p className="text-muted-foreground">
                I specialize in building KPI-driven dashboards, automating ETL pipelines, and integrating data from 
                <strong> SAP EWM/TM, IoT sensor streams, and APIs</strong> into unified reporting systems. My expertise also includes 
                predictive modeling, NLP, recommendation systems, and statistical analysis.
              </p>
              <p className="text-muted-foreground">
                Passionate about <strong>business impact</strong>, I focus on improving operational efficiency, accelerating 
                decision-making, and delivering scalable, data-driven solutions. 
              </p>
            </div>

            {/* Skills Progress */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Key Competencies</h3>
              <div>
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Animated Counters */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <Counter end={2} suffix="+" label="Years Experience" />
              <Counter end={89} suffix="%" label="Forecast Accuracy (COVID/IoT)" />
              <Counter end={18} suffix="%" label="Ops Efficiency Gain" />
              <Counter end={35} suffix="%" label="Reporting Time Saved" />
            </div>

            {/* Highlight Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: '🚀',
                  title: 'KPI Dashboards',
                  description: 'Built BI dashboards merging SAP & vendor data, saving 35% reporting time'
                },
                {
                  icon: '🎯',
                  title: 'Predictive Modeling',
                  description: 'Achieved 89% accuracy in COVID-19 and IoT failure forecasting'
                },
                {
                  icon: '⚡',
                  title: 'Process Efficiency',
                  description: 'Improved warehouse operations by 18% with SAP & IoT analytics'
                },
                {
                  icon: '🔍',
                  title: 'Data Integration',
                  description: 'Unified SAP, IoT, and multi-source APIs into real-time reporting systems'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center p-4 glass rounded-lg hover-lift group"
                >
                  <div className="text-2xl mr-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
