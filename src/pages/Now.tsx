import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Now() {
  return (
    <div className="min-h-screen py-20">
      <motion.div 
        className="container mx-auto px-4"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-2xl font-semibold mb-6"
            variants={fadeInUp}
          >
            Now
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mb-8"
            variants={fadeInUp}
          >
            This "Now" page reflects my current priorities and goals, and I will update it regularly as my focus and activities change over time. Most of my time now is spent on learning and improving my skills in software development, especially in the areas of backend development, distributed systems, and cloud computing. I am also dedicating time to personal growth, health, and building meaningful relationships with friends and family. As I grow in my career, I am also exploring opportunities to contribute to open source projects and give back to the tech community. Overall, my focus is on continuous learning, self-improvement, and making a positive impact in both my personal and professional life.
          </motion.p>

          <motion.p 
            className="text-sm text-gray-500 mb-12"
            variants={fadeInUp}
          >
            Published: 2024.12 | Last updated: 2026.2 | This Now page is inspired by{" "}
            <a 
              href="https://nownownow.com/about" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white decoration-gray-400 hover:decoration-wavy"
            >
              Derek Sivers
            </a>
          </motion.p>

          <motion.h2 
            className="text-2xl font-semibold mb-6"
            variants={fadeInUp}
          >
            Other Things
          </motion.h2>

          <motion.ul 
            className="space-y-4"
            variants={fadeInUp}
          >
            <li className="flex items-start space-x-2">
              <span className="text-gray-400">⏤</span>
              <span>
                Reading more books, especially non-fiction and self-improvement ones. Currently reading the Red Rising Series by Pierce Brown, and I highly recommend it for anyone who enjoys sci-fi and dystopian novels but also expanding my knowledge on Kubernetes so im reading "Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Systems Using Kubernetes" by Brendan Burns and David Oppenheimer
              </span>
            </li>

            <li className="flex items-start space-x-2">
              <span className="text-gray-400">⏤</span>
              <span>Trying to be consistent in everything I do, whether that's in work, studies, relationships, or health</span>
            </li>
              
            <li className="flex items-start space-x-2">
              <span className="text-gray-400">⏤</span>
              <span>Learning to be more patient with myself and others</span>
            </li>

            <li className="flex items-start space-x-2">
              <span className="text-gray-400">⏤</span>
              <span>Discovering the beautiful state of mind that comes with cycling</span>
            </li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
}