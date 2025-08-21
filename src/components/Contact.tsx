// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';

// export const Contact: React.FC = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//             <span className="gradient-primary bg-clip-text text-transparent">Get In Touch</span>
//           </h2>
//           <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8" />
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Ready to transform your data challenges into strategic advantages?
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div className="glass p-6 rounded-xl hover-lift">
//               <Mail className="h-8 w-8 text-primary mb-4" />
//               <h3 className="font-semibold mb-2">Email</h3>
//               <p className="text-muted-foreground">ruthvikvarma7725@gmail.com</p>
//             </div>
            
//             <div className="glass p-6 rounded-xl hover-lift">
//               <Phone className="h-8 w-8 text-accent mb-4" />
//               <h3 className="font-semibold mb-2">Phone</h3>
//               <p className="text-muted-foreground">+1 (856) 652-4932</p>
//             </div>
            
//             <div className="glass p-6 rounded-xl hover-lift">
//               <MapPin className="h-8 w-8 text-violet mb-4" />
//               <h3 className="font-semibold mb-2">Location</h3>
//               <p className="text-muted-foreground">Glassboro, NJ</p>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="glass p-8 rounded-xl"
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <Input
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   className="bg-background/50"
//                 />
//               </div>
//               <div>
//                 <Input
//                   type="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({...formData, email: e.target.value})}
//                   className="bg-background/50"
//                 />
//               </div>
//               <div>
//                 <Textarea
//                   placeholder="Your Message"
//                   rows={5}
//                   value={formData.message}
//                   onChange={(e) => setFormData({...formData, message: e.target.value})}
//                   className="bg-background/50"
//                 />
//               </div>
//               <Button
//                 type="submit"
//                 size="lg"
//                 className="w-full gradient-primary text-white hover-scale hover-glow"
//               >
//                 <Send className="mr-2 h-5 w-5" />
//                 Send Message
//               </Button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-10 lg:py-32 relative overflow-hidden">
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
            <span className="gradient-primary bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your data challenges into strategic advantages?
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass p-6 rounded-xl hover-lift">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">ruthvikvarma7725@gmail.com</p>
            </div>
            
            <div className="glass p-6 rounded-xl hover-lift">
              <Phone className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (856) 652-4932</p>
            </div>
            
            <div className="glass p-6 rounded-xl hover-lift">
              <MapPin className="h-8 w-8 text-violet mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Glassboro, NJ</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass p-8 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background/50"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background/50"
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background/50"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary text-white hover-scale hover-glow"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
