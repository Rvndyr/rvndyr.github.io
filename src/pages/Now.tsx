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
            This "Now" page reflects my current priorities and goals, and I will update it regularly as my focus and activities change over time. I'm currently building a git commit summary react component. Basically, in my portfolio you'll see a timeline of a list of summarized work ive done from week to week. Ill be utilizing github api and AI to generate a summary. My goal is to keep improving my skills through real-world applications, so I plan on adding some operational scripts/automation to this project too, whether that's a simple CI/CD pipeline or hosting the site on AWS.
          </motion.p>

          <motion.p 
            className="text-sm text-gray-500 mb-12"
            variants={fadeInUp}
          >
            Published: 2024.12 | Last updated: 2024.12 | This Now page is inspired by{" "}
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
              <span>Focusing on working out, lifting heavy weights, and eating enough calories to maintain muscle</span>
            </li>

            <li className="flex items-start space-x-2">
              <span className="text-gray-400">⏤</span>
              <span>
                Trying to read more manhwa. I finished the{" "}
                <a
                  href="https://www.amazon.com/dp/B08G4GCLX3?binding=paperback&qid=1735183650&sr=8-2&ref=dbs_dp_rwt_sb_pc_tpbk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block font-bold text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white
                           after:content-[''] after:absolute after:w-full after:h-0.5 
                           after:bg-gray-900 dark:after:bg-gray-300 after:left-0 after:bottom-0 
                           after:origin-right after:scale-x-0 hover:after:scale-x-100 
                           after:transition-transform after:duration-300 after:ease-out"
                >
                  <i>Solo Leveling</i>
                </a>{" "}
                series, and it was captivating. Now I'm looking for the next one
              </span>
            </li>

            <li className="flex items-start space-x-2">
              <span className="text-gray-400">⏤</span>
              <span>Trying to be consistent in everything I do, whether that's in work, studies, relationships, or health</span>
            </li>
              
            <li className="flex items-start space-x-2">
              <span className="text-gray-400">⏤</span>
              <span>Exploring more of Florida's beautiful landscapes</span>
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