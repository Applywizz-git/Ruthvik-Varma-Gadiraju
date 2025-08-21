// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ExternalLink, Award } from 'lucide-react';

// const certifications = [
//   {
//     title: 'Google Data Analytics',
//     issuer: 'Coursera',
//     date: '2023',
//     credentialId: 'GDA-2023-001',
//     icon: '📊'
//   },
//   {
//     title: 'IBM Data Science',
//     issuer: 'Coursera', 
//     date: '2023',
//     credentialId: 'IDS-2023-002',
//     icon: '🔬'
//   },
//   {
//     title: 'Data Analysis with Python',
//     issuer: 'DataCamp',
//     date: '2022',
//     credentialId: 'DAP-2022-003',
//     icon: '🐍'
//   },
//   {
//     title: 'Machine Learning Specialization',
//     issuer: 'Coursera',
//     date: '2022',
//     credentialId: 'MLS-2022-004',
//     icon: '🤖'
//   },
//   {
//     title: 'SQL for Data Analysis',
//     issuer: 'Udemy',
//     date: '2022',
//     credentialId: 'SQL-2022-005',
//     icon: '🗄️'
//   }
// ];

// export const Certification: React.FC = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

//   return (
//     <section id="certification" className="py-20 lg:py-32 relative overflow-hidden">
//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//             <span className="gradient-primary bg-clip-text text-transparent">Certifications</span>
//           </h2>
//           <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {certifications.map((cert, index) => (
//             <motion.div
//               key={cert.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="glass p-6 rounded-xl hover-lift group"
//             >
//               <div className="text-3xl mb-4">{cert.icon}</div>
//               <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
//               <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
//               <p className="text-primary text-sm">{cert.date}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certifications = [
  {
    title: 'Google Data Analytics',
    issuer: 'Coursera',
    // date: '2023',
    credentialId: 'GDA-2023-001',
    icon: '📊'
  },
  {
    title: 'IBM Data Science',
    issuer: 'Coursera', 
    // date: '2023',
    credentialId: 'IDS-2023-002',
    icon: '🔬'
  },
  {
    title: 'SQL for Data Science',
    issuer: 'Udemy',
    // date: '2022',
    credentialId: 'SQL-2022-003',
    icon: '🗄️'
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'Coursera',
    // date: '2022',
    credentialId: 'MLP-2022-004',
    icon: '🤖'
  },
  {
    title: 'Data Visualization with Tableau',
    issuer: 'Coursera',
    // date: '2022',
    credentialId: 'DVT-2022-005',
    icon: '📈'
  },
  {
    title: 'Python for Data Science',
    issuer: 'DataCamp',
    // date: '2021',
    credentialId: 'PDS-2021-006',
    icon: '🐍'
  }
];

export const Certification: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="certification" className="py-10 lg:py-10 relative overflow-hidden">
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
            <span className="gradient-primary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 rounded-xl hover-lift group"
            >
              <div className="text-3xl mb-4">{cert.icon}</div>
              <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
              {/* <p className="text-primary text-sm">{cert.date}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
