import { Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  className?: string;
}

export function BlogCard({ title, excerpt, date, slug, className }: BlogCardProps) {
  return (
    <div className={cn("block rounded-lg border bg-white dark:bg-[#1e2330] dark:border-[#2a2f3d] p-6 shadow-sm hover:shadow-md transition-shadow", className)}>
      <h3 className="text-xl font-semibold dark:text-gray-100">{title}</h3>
      <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
        <Calendar className="mr-1 h-4 w-4" />
        <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
      </div>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{excerpt}</p>
    </div>
  );
}