import { ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { ActivityFeed } from '../components/ActivityFeed';

const skills = [
  "Ruby", "Rails", "Vue.js", "JavaScript", "Python", "React", "HTML", "CSS",
  "PostgreSQL", "Git", "GitHub", "APIs", "Pair-Programming", "Testing",
  "Object-Oriented Programming", "Bootstrap", "Materialize", "Jenkins",
  "Github Actions", "AWS", "Kubernetes", "Argocd", "Helm", "Docker",
  "VMWare", "Microsoft Office Suite"
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
    title: "Kubernetes Cluster Automation",
    description: "Automated K8s cluster deployment with Terraform and Ansible on AWS EKS.",
    tags: ["Kubernetes", "Terraform", "AWS", "Ansible"],
    githubUrl: "",
  },
  {
    title: "CI/CD Pipeline Framework",
    description: "Reusable CI/CD pipeline templates for multiple deployment scenarios.",
    tags: ["Jenkins", "Docker", "GitLab CI", "GitHub Actions"],
    githubUrl: "",
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
            className="flex items-center justify-between gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="max-w-2xl">
              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-6xl dark:text-white"
                variants={fadeInUp}
              >
                Developer
              </motion.h1>
              <motion.p 
                className="mt-6 text-xl text-gray-600 dark:text-gray-300"
                variants={fadeInUp}
              >
                Specializing in building scalable infrastructure, automating deployments,
                and optimizing cloud resources.
              </motion.p>
              <motion.div 
                className="mt-8 flex gap-4"
                variants={fadeInUp}
              >
                <Link
                  to="/blog"
                  className="group relative inline-flex items-center overflow-hidden rounded-md bg-gray-900 px-6 py-3 text-white transition-all duration-300 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
                >
                  <span className="relative">Blog</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/about"
                  className="group relative inline-flex items-center overflow-hidden rounded-md border-2 border-gray-900 px-6 py-3 text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900"
                >
                  <span className="relative">About Me</span>
                  <User className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:scale-110" />
                </Link>
              </motion.div>
            </div>
            <motion.div
              variants={fadeInUp}
              className="hidden lg:block flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-gray-900/0 rounded-[2rem]"></div>
                <img
                  src="https://rvndyr-portfolio.s3.us-east-2.amazonaws.com/assets/randy.JPG"
                  alt="Randy Rodriguez"
                  className="w-64 h-64 rounded-[2rem] object-cover shadow-xl border-2 border-white/10 dark:border-gray-800"
                />
              </div>
            </motion.div>
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
                className="mt-8 flex flex-wrap gap-3"
                variants={staggerContainer}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={fadeInUp}
                    custom={index}
                    className="rounded-full bg-gray-100 dark:bg-[#1e2330] px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-300 transition-all duration-300 hover:bg-gray-900 hover:text-white dark:hover:bg-[#2a2f3d] hover:scale-110 hover:shadow-lg cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
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
    </div>
  );
}