// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Download, ChevronDown } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import profileImage from '@/assets/profile-image.jpg';
// import heroBg from '@/assets/hero-bg.jpg';

// const typewriterTexts = [
//   'Data Analyst',
//   'SQL Expert',
//   'Python Developer',
//   'Power BI Specialist',
//   'Tableau Expert',
//   'D3.js Visualizer',
//   'AWS Professional'
// ];

// export const Hero: React.FC = () => {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [displayText, setDisplayText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = typewriterTexts[currentTextIndex];
//     const timeout = setTimeout(() => {
//       if (isDeleting) {
//         setDisplayText(currentWord.substring(0, displayText.length - 1));
//         if (displayText === '') {
//           setIsDeleting(false);
//           setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
//         }
//       } else {
//         setDisplayText(currentWord.substring(0, displayText.length + 1));
//         if (displayText === currentWord) {
//           setTimeout(() => setIsDeleting(true), 2000);
//         }
//       }
//     }, isDeleting ? 50 : 100);

//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, currentTextIndex]);

//   const scrollToAbout = () => {
//     const aboutSection = document.getElementById('about');
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const scrollToProjects = () => {
//     const projectsSection = document.getElementById('projects');
//     if (projectsSection) {
//       projectsSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section 
//       id="home" 
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroBg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}
//     >
//       {/* Animated Background Overlay */}
//       <div className="absolute inset-0 gradient-hero opacity-90" />
      
//       {/* Floating Elements */}
//       <div className="absolute inset-0">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-primary/30 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [-20, 20, -20],
//               opacity: [0.3, 0.8, 0.3],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
//         {/* Left Side - Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center lg:text-left"
//         >
//           {/* Main Headline */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
//           >
//             <span className="text-foreground">Turning</span>
//             <br />
//             <span className="gradient-primary bg-clip-text text-transparent">
//               Complex Data
//             </span>
//             <br />
//             <span className="text-foreground">Into</span>
//             <br />
//             <span className="gradient-accent bg-clip-text text-transparent">
//               Decisions
//             </span>
//           </motion.h1>

//           {/* Typewriter Effect */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="mb-8"
//           >
//             <p className="text-xl lg:text-2xl text-muted-foreground mb-2">
//               I'm a{' '}
//               <span className="text-primary font-semibold typewriter min-w-[200px] inline-block">
//                 {displayText}
//               </span>
//             </p>
//           </motion.div>

//           {/* Subheadline */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl"
//           >
//             Master's in Data Science. I build interactive BI dashboards, automate ETL pipelines, 
//             and deliver predictive analytics across supply chain, IoT, e-commerce & CRM.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//           >
//             <Button
//               onClick={scrollToProjects}
//               size="lg"
//               className="gradient-primary text-white hover-scale hover-glow font-semibold px-8 py-6 text-lg"
//             >
//               View Projects
//               <motion.div
//                 animate={{ x: [0, 5, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//                 className="ml-2"
//               >
//                 →
//               </motion.div>
//             </Button>
            
//             <Button
//               variant="outline"
//               size="lg"
//               className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale font-semibold px-8 py-6 text-lg"
//               onClick={() => window.open('/assets/resume.pdf', '_blank')}
//             >
//               <Download className="mr-2 h-5 w-5" />
//               Download Resume
//             </Button>
//           </motion.div>

//           {/* Location */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1.0 }}
//             className="mt-8 flex items-center justify-center lg:justify-start"
//           >
//             <div className="glass px-4 py-2 rounded-full">
//               <span className="text-sm text-muted-foreground">📍 Glassboro, NJ</span>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Right Side - Profile Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="flex justify-center lg:justify-end"
//         >
//           <div className="relative">
//             {/* Glowing Background */}
//             <motion.div
//               animate={{ 
//                 scale: [1, 1.1, 1],
//                 rotate: [0, 5, -5, 0]
//               }}
//               transition={{ 
//                 duration: 4, 
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-30"
//             />
            
//             {/* Profile Image */}
//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               transition={{ 
//                 duration: 1, 
//                 delay: 0.6,
//                 type: "spring",
//                 stiffness: 200,
//                 damping: 20
//               }}
//               className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-elegant hover-lift float"
//             >
//               <img
//                 src={profileImage}
//                 alt="Ruthvik Varma Gadiraju"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>

//             {/* Floating Icons */}
//             <motion.div
//               animate={{ 
//                 y: [-10, 10, -10],
//                 rotate: [0, 360]
//               }}
//               transition={{ 
//                 duration: 3, 
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl shadow-glow"
//             >
//               📊
//             </motion.div>

//             <motion.div
//               animate={{ 
//                 y: [10, -10, 10],
//                 rotate: [360, 0]
//               }}
//               transition={{ 
//                 duration: 4, 
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 1
//               }}
//               className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl shadow-glow"
//             >
//               🔍
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 1.2 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
//         onClick={scrollToAbout}
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
//         >
//           <span className="text-sm mb-2">Scroll Down</span>
//           <ChevronDown className="h-6 w-6" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const typewriterTexts = [
  'Data Analyst',
  'SQL & Python Expert',
  'BI Dashboard Developer',
  'ETL Automation Specialist',
  'Predictive Modeler',
  'SAP & IoT Integrator',
  'AWS & Cloud Professional'
];




export const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
const text = "RUTHVIK VARMA GADIRAJU";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const currentWord = typewriterTexts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

   useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 120); // typing speed (ms per char)
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Main Headline */}
          <h1 className='text-xl'><b>Hi I'm</b></h1>
          <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
    >
      <span className="gradient-primary bg-clip-text text-transparent">
        {displayedText}
      </span>
      <span className="animate-pulse">|</span> {/* blinking cursor */}
    </motion.h1>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-xl lg:text-2xl text-muted-foreground mb-2">
              I'm a{' '}
              <span className="text-primary font-semibold typewriter min-w-[220px] inline-block">
                {displayText}
              </span>
            </p>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            Master’s in Data Science | Skilled in SQL, Python, Power BI, Tableau & D3.js. 
            I build KPI-driven dashboards, automate ETL pipelines, and integrate SAP, IoT, and API data 
            into scalable, real-time reporting systems that accelerate decision-making.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="gradient-primary text-white hover-scale hover-glow font-semibold px-8 py-6 text-lg"
            >
              View Projects
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                →
              </motion.div>
            </Button>
                                        <a href="/assets/RESUME_RUTHVIK_VARMA_GADIRAJU.pdff" download>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale font-semibold px-8 py-6 text-lg"
              // onClick={() => window.open('/assets/RESUME_RUTHVIK_VARMA_GADIRAJU.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            </a>
          </motion.div>

          {/* Location */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-8 flex items-center justify-center lg:justify-start"
          >
            <div className="glass px-4 py-2 rounded-full">
              <span className="text-sm text-muted-foreground">📍 Glassboro, NJ</span>
            </div>
          </motion.div> */}
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glowing Background */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-30"
            />
            
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-elegant hover-lift float"
            >
              <img
                src={profileImage}
                alt="Ruthvik Varma Gadiraju"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl shadow-glow"
            >
              📊
            </motion.div>

            <motion.div
              animate={{ 
                y: [10, -10, 10],
                rotate: [360, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl shadow-glow"
            >
              🔍
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};
