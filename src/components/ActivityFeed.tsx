import { useEffect, useState } from 'react';
import { Calendar, GitCommit } from 'lucide-react';
import { motion } from 'framer-motion';

interface Activity {
  date: string;
  description: string;
}

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

export function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivityFeed = async () => {
      try {
        const response = await fetch('/src/timeline/activity_summary.md');
        const content = await response.text();
        
        // Parse the content by splitting on newlines and filtering empty lines
        const lines = content.split('\n').filter(line => line.trim());
        
        const parsedActivities = lines.map(line => {
          const [date, ...descriptionParts] = line.split(':');
          return {
            date: date.trim(),
            description: descriptionParts.join(':').trim()
          };
        });
        
        // Sort activities by date in descending order
        parsedActivities.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime();
        });
        
        setActivities(parsedActivities);
      } catch (error) {
        console.error('Error loading activity feed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivityFeed();
  }, []);

  if (loading) {
    return (
      <div className="bg-white dark:bg-[#1e2330] rounded-lg shadow-sm p-6 h-full">
        <h3 className="text-xl font-semibold mb-4 dark:text-white">Latest Activity</h3>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex space-x-3">
              <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="bg-white dark:bg-[#1e2330] rounded-lg shadow-sm p-6 h-full"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.h3 
        className="text-xl font-semibold mb-4 dark:text-white flex items-center"
        variants={fadeInUp}
      >
        <GitCommit className="mr-2 h-5 w-5" />
        Latest Activity
      </motion.h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div 
            key={index} 
            className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 py-1"
            variants={fadeInUp}
          >
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
              <Calendar className="mr-1 h-4 w-4" />
              <time dateTime={activity.date}>{activity.date}</time>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{activity.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}