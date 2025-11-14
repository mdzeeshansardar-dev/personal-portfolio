import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const experiences = [
    {
      company: 'Microsoft',
      position: 'Senior Web Developer',
      years: '2010–Present',
      description: 'Leading frontend architecture and development of enterprise-scale web applications'
    },
    {
      company: 'Google',
      position: 'Web Engineer',
      years: '2005–2010',
      description: 'Developed and optimized web services for millions of users'
    },
    {
      company: 'Apple',
      position: 'UI/UX Developer',
      years: '2000–2005',
      description: 'Designed and implemented user interfaces for multiple product lines'
    },
    {
      company: 'Meta',
      position: 'Full-Stack Developer',
      years: '1995–2000',
      description: 'Built scalable backend systems and interactive frontend experiences'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Professional Experience
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Dot */}
              <div className="flex justify-center w-0 md:w-1/2">
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-blue-600 rounded-full transform md:-translate-x-1/2 -translate-x-1.5 mt-2" />
              </div>

              {/* Content */}
              <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                    {exp.years}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
