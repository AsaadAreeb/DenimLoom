import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-indigo-600 hover:text-indigo-800">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-indigo-200">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.publishDate).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Article Content */}
      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="prose prose-lg prose-indigo max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Posts Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <h3 className="text-xl font-bold mb-6">More Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .sort(() => 0.5 - Math.random()) // Shuffle the array
                .slice(0, 2) // Take first two from the shuffled list
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                      <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 mb-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center mt-3 text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {relatedPost.readTime}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;