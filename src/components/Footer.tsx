// import React from 'react';
// import { motion } from 'framer-motion';
// import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export const Footer: React.FC = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="relative py-16 bg-secondary/10">
//       <div className="container mx-auto px-6">
//         <div className="text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-8"
//           >
//             <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
//               Ruthvik Varma Gadiraju
//             </h3>
//             <p className="text-muted-foreground">Data Analyst</p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex justify-center gap-6 mb-8"
//           >
//             <Button variant="ghost" size="sm" className="hover-scale">
//               <Linkedin className="h-5 w-5" />
//             </Button>
           
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-muted-foreground text-sm"
//           >
//             © {new Date().getFullYear()} Ruthvik Varma Gadiraju — Data Analyst
//           </motion.p>
//         </div>

//         {/* Scroll to Top */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="fixed bottom-8 right-8 z-50"
//         >
//           <Button
//             onClick={scrollToTop}
//             size="sm"
//             className="rounded-full w-12 h-12 gradient-primary text-white shadow-glow hover-scale"
//           >
//             <ChevronUp className="h-5 w-5" />
//           </Button>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              Ruthvik Varma Gadiraju
            </h3>
            <p className="text-muted-foreground">Data Analyst</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-6 mb-8"
          >
            <a
              // href="https://www.linkedin.com/in/ruthvik-varma-gadiraju" 
                href="https://www.linkedin.com/in/ruthvik-/" 
               target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="sm" className="hover-scale">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-sm"
          >
            © {new Date().getFullYear()} Ruthvik Varma Gadiraju — Data Analyst
          </motion.p>
        </div>

        {/* Scroll to Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="sm"
            className="rounded-full w-12 h-12 gradient-primary text-white shadow-glow hover-scale"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};
