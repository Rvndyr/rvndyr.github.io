import { Github, Linkedin, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-dark-bg/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link to="/" className="text-lg font-bold dark:text-white">
          Randy Rodriguez
        </Link>
        <nav className="ml-auto flex items-center space-x-4">
          <Link to="/blog" className="text-sm font-medium hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Blog
          </Link>
          <Link to="/now" className="text-sm font-medium hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Now
          </Link>
          <a
            href="https://github.com/Rvndyr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/randyrod/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <button
            onClick={toggleTheme}
            className="ml-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>
      </div>
    </header>
  );
}