import { motion } from 'framer-motion';
import { Books } from '../components/Books';

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

export function About() {
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
          <motion.h1 
            className="text-4xl font-bold mb-8 dark:text-white"
            variants={fadeInUp}
          >
            About Me
          </motion.h1>
          
          <motion.div 
            className="prose prose-lg dark:prose-invert"
            variants={fadeInUp}
          >
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Brief facts about me</p>

            <ul className="space-y-4 list-none pl-0">
              <li className="flex items-start space-x-2">
                <span className="text-gray-400">⏤</span>
                <span className="dark:text-gray-300">Born in New York City, raised in the Bronx. My roots gave me <i>thick</i> skin</span>
              </li>
              
              <li className="flex items-start space-x-2">
                <span className="text-gray-400">⏤</span>
                <span className="dark:text-gray-300">Packed my bags and drove 1,000* miles to Tampa, Florida, which I now call home</span>
              </li>
              
              <li className="flex items-start space-x-2">
                <span className="text-gray-400">⏤</span>
                <span className="dark:text-gray-300">Passionate about cars, bikes, tech, and fitness</span>
              </li>
              
              <li className="flex items-start space-x-2">
                <span className="text-gray-400">⏤</span>
                <span className="dark:text-gray-300">Fluent in English and Spanish</span>
              </li>
              
              <li className="flex items-start space-x-2">
                <span className="text-gray-400">⏤</span>
                <span className="dark:text-gray-300">Unfortunately, I have an obsession with watches</span>
              </li>
              
              <li className="flex items-start space-x-2">
                <span className="text-gray-400">⏤</span>
                <span className="dark:text-gray-300">
                  I listen to all types of music, different genres, and languages, especially{" "}
                  <a
                    href="https://music.apple.com/us/album/otonoke/1771603028?i=1771603031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block font-bold text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white
                             after:content-[''] after:absolute after:w-full after:h-0.5 
                             after:bg-gray-900 dark:after:bg-gray-300 after:left-0 after:bottom-0 
                             after:origin-right after:scale-x-0 hover:after:scale-x-100 
                             after:transition-transform after:duration-300 after:ease-out"
                  >
                    Japanese
                  </a>{" "}
                  music
                </span>
              </li>
              
              <li className="flex items-start space-x-2">
                <span className="text-gray-400">⏤</span>
                <span className="dark:text-gray-300">
                  I have 3 energetic{" "}
                  <span className="relative group cursor-pointer">
                    dogs
                    <img
                      src="https://rvndyr-portfolio.s3.us-east-2.amazonaws.com/assets/3_doggos.jpeg"
                      alt="Three dogs"
                      className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-2
                               w-[150px] rounded-lg shadow-lg mb-2"
                    />
                  </span>!
                </span>
              </li>
              
              <li className="flex items-start space-x-2">
                <span className="text-gray-400">⏤</span>
                <div className="dark:text-gray-300">
                  <span>Some of the books I've read:</span>
                  <div className="mt-4 overflow-x-auto pb-4">
                    <Books />
                  </div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-gray-400">⏤</span>
                <span className="dark:text-gray-300">Currently reading Red Rising in the list. My first Fantasy book!</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}