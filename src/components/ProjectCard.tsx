import { Github, Link as LinkIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  className,
}: ProjectCardProps) {
  return (
    <div className={cn("rounded-lg border bg-white dark:bg-[#1e2330] dark:border-[#2a2f3d] p-6 shadow-sm hover:shadow-md transition-shadow", className)}>
      <h3 className="text-xl font-semibold dark:text-gray-100">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 dark:bg-[#2a2f3d] px-3 py-1 text-sm font-medium text-gray-800 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex space-x-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          >
            <Github className="mr-1 h-4 w-4" />
            <span>Code</span>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          >
            <LinkIcon className="mr-1 h-4 w-4" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}