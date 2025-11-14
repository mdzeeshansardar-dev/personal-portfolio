import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            About Me
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With over two decades of experience in web development, I've had the privilege of working with industry leaders like Microsoft, Google, Apple, and Meta. My journey has been driven by a passion for creating elegant solutions to complex problems.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in full-stack development with expertise in modern JavaScript frameworks, backend technologies, and cloud infrastructure. I'm committed to writing clean, maintainable code and fostering collaborative engineering cultures.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond code, I'm passionate about mentoring junior developers, contributing to open-source projects, and staying at the forefront of web technology trends.
            </p>

            {/* Highlights */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-slate-700"
            >
              {[
                { number: '20+', label: 'Years of Experience' },
                { number: '50+', label: 'Projects Completed' },
                { number: '5', label: 'Fortune 500 Companies' },
                { number: '15', label: 'Team Members Led' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.number}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            variants={itemVariants}
            className="relative hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-lg opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg p-8 shadow-xl">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-8 space-y-4">
                  {[
                    { label: 'Problem Solving', value: 95 },
                    { label: 'Leadership', value: 90 },
                    { label: 'Innovation', value: 92 },
                    { label: 'Communication', value: 88 }
                  ].map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {skill.label}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 font-bold">
                          {skill.value}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
