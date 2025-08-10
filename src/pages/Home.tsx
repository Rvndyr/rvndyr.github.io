import { ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { ActivityFeed } from '../components/ActivityFeed';
import { Books } from '../components/Books';

const skills = [
  "Ruby", "Rails", "Vue.js", "JavaScript", "Python", "React", "HTML", "CSS",
  "PostgreSQL", "Git", "GitHub", "APIs", "Pair-Programming", "Testing",
  "Object-Oriented Programming", "Bootstrap", "Materialize", "Jenkins",
  "Github Actions", "AWS", "Kubernetes", "Argocd", "Helm", "Docker",
  "VMWare"
];

const projects = [
  {
    title: "Multi-Mon",
    description: "A utility used to watch multiple streams over Twitch, enabling users to monitor multiple channels simultaneously.",
    tags: ["Vue", "Twitch API", "Frontend Development"],
    githubUrl: "https://github.com/Rvndyr/MultiMon-frontend",
    liveUrl: "https://multi-mon.netlify.app/login"
  },
  {
    title: "Commit-Summary",
    description: "A python script that uses OpenAI to generates a summary of your github activity feed for the week and uses a github action to post it to a markdown file into a target repo.",
    tags: ["Python", "GitHub Actions", "Git", "OpenAI"],
    githubUrl: "https://github.com/Rvndyr/commit-summary",
  }
];

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

export function Home() {
  return (
    <div className="min-h-screen dark:bg-dark-bg">
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:to-dark-bg py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="mb-8"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                <img
                  src="https://rvndyr-portfolio.s3.us-east-2.amazonaws.com/assets/randy.JPG"
                  alt="Randy Rodriguez"
                  className="relative w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-white/20 dark:border-gray-800/50 mx-auto"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-dark-bg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="mb-4"
                variants={fadeInUp}
              >
                <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  👋 Hey there, I'm Randy
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold tracking-tight dark:text-white mb-6"
                variants={fadeInUp}
              >
                Building the future, one line of code at a time
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                I'm a passionate developer who loves creating scalable infrastructure, 
                automating deployments, and turning complex problems into elegant solutions.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                variants={fadeInUp}
              >
                <Link
                  to="/now"
                  className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="relative font-medium">What I'm up to now</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="mailto:randy@example.com"
                  className="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
                >
                  <span className="relative font-medium">Let's connect</span>
                  <User className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:scale-110" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 dark:bg-dark-bg">
        <motion.div 
          className="container mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.h2 
                className="text-3xl font-bold dark:text-white"
                variants={fadeInUp}
              >
                Core Skills
              </motion.h2>
              <motion.div 
                className="mt-8 bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700"
                variants={staggerContainer}
              >
                {/* Terminal Header */}
                <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm font-mono ml-4">randy@portfolio:~$</div>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="text-green-400 mb-2">$ ls -la skills/</div>
                  <div className="text-gray-300 mb-4">total {skills.length}</div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        variants={fadeInUp}
                        custom={index}
                        className="text-green-400 hover:text-green-300 transition-colors duration-200 cursor-default flex items-center"
                      >
                        <span className="text-gray-500 mr-2">-rwxr-xr-x</span>
                        <span className="hover:bg-green-400 hover:text-black px-1 rounded transition-all duration-200">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex items-center">
                    <span className="text-green-400">$ </span>
                    <span className="text-gray-400 ml-1 animate-pulse">_</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-1">
              <ActivityFeed />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-dark-bg">
        <motion.div 
          className="container mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold dark:text-white"
            variants={fadeInUp}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="mt-4 text-gray-600 dark:text-gray-300"
            variants={fadeInUp}
          >
            A collection of my key projects
          </motion.p>
          <motion.div 
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                custom={index}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 dark:bg-dark-bg">
        <motion.div 
          className="container mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold dark:text-white"
            variants={fadeInUp}
          >
            Books
          </motion.h2>
          <motion.p 
            className="mt-4 text-gray-600 dark:text-gray-300"
            variants={fadeInUp}
          >
            I have been reading a lot of books lately, here is a list of the recent ones I've enjoyed:
          </motion.p>
          <motion.div 
            className="mt-8 overflow-x-auto pb-4"
            variants={fadeInUp}
          >
            <Books />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}