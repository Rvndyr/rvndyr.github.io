import { useState } from 'react';
import { BlogCard } from '../components/BlogCard';
import { Modal } from '../components/Modal';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  content: string;
}

const posts: Omit<BlogPost, 'content'>[] = [
  {
    title: "Commit Summary AI",
    excerpt: "My First Open AI Project.",
    date: "2024-03-05",
    slug: "commit-summary"
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

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const loadPostContent = async (slug: string) => {
    try {
      const response = await fetch(`/src/content/${slug}.md`);
      const content = await response.text();
      return content;
    } catch (error) {
      console.error('Error loading post content:', error);
      return '';
    }
  };

  const handlePostClick = async (post: Omit<BlogPost, 'content'>) => {
    const content = await loadPostContent(post.slug);
    setSelectedPost({ ...post, content });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 
          className="text-3xl font-bold dark:text-white"
          variants={fadeInUp}
        >
          DevOps Blog
        </motion.h1>
        <motion.p 
          className="mt-4 text-gray-600 dark:text-gray-300"
          variants={fadeInUp}
        >
          Insights, tutorials, and best practices from my experience in DevOps and cloud architecture.
        </motion.p>
        <motion.div 
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
        >
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              variants={fadeInUp}
              onClick={() => handlePostClick(post)}
            >
              <BlogCard {...post} className="cursor-pointer" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Modal
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
      >
        {selectedPost && (
          <article className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="text-3xl font-bold mb-4 dark:text-white">{selectedPost.title}</h1>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Published on {new Date(selectedPost.date).toLocaleDateString()}
            </div>
            <div className="dark:text-gray-200">
              <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
            </div>
          </article>
        )}
      </Modal>
    </div>
  );
}