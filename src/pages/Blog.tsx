import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Calendar, Clock, User, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactDOMServer from 'react-dom/server';



const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.denimloom.com/blog",
  "url": "https://www.denimloom.com/blog",
  "name": "Denim Loom Blog",
  "description":
    "Explore denim insights, sustainability tips, and fashion trends from Denim Loom’s blog.",
  "publisher": {
    "@type": "Organization",
    "name": "Denim Loom",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.denimloom.com/blogs/denimloom_logo.jpg"
    }
  },
  "blogPost": blogPosts.map((post) => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://www.denimloom.com${post.image}`,
    "author": {
      "@type": "Organization",
      "name": "Denim Loom"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Denim Loom",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.denimloom.com/blogs/denimloom_logo.jpg"
      }
    },
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "keywords": post.tags,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.denimloom.com/blog/${post.slug}`
    },
    "isPartOf": {
      "@type": "Blog",
      "@id": "https://www.denimloom.com/blog"
    },
    // Optional but nice → render HTML to plain string
    "articleBody": ReactDOMServer.renderToStaticMarkup(
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    )
  }))
};

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog – Denim Loom</title>
          {/* Core SEO */}
          <title>Blog – Denim Loom</title>
          <meta
            name="description"
            content="Explore denim insights, sustainability tips, and fashion trends from Denim Loom’s blog. Stay updated with the latest in denim fashion and innovation."
          />
          <link rel="canonical" href="https://www.denimloom.com/blog" />

          {/* Open Graph (for Facebook, LinkedIn, WhatsApp, etc.) */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Denim Loom Blog – Denim Insights & Trends" />
          <meta
            property="og:description"
            content="Explore denim insights, sustainability tips, and fashion trends from Denim Loom’s blog."
          />
          <meta property="og:image" content="https://www.denimloom.com/hero/blog_hero.jpeg" />
          <meta property="og:url" content="https://www.denimloom.com/blog" />
          <meta property="og:site_name" content="Denim Loom" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Denim Loom Blog – Denim Insights & Trends" />
          <meta
            name="twitter:description"
            content="Explore denim insights, sustainability tips, and fashion trends from Denim Loom’s blog."
          />
          <meta name="twitter:image" content="https://www.denimloom.com/hero/blog_hero.jpeg" />

          {/* Optional: keywords (not ranking factor, but can help contextually) */}
          <meta
            name="keywords"
            content="denim blog, denim insights, sustainable denim, denim trends, denim fashion"
          />
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>
      <Navbar variant="hero" />

      <div className="flex flex-col">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[70vh] flex items-center text-white pt-32"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/hero/blog_hero.jpeg"
              alt="Denim Loom Blog"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Left-aligned text content */}
          <div className="relative">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-xl text-left ml-3 md:ml-[200px]"
            >
              <h1 className="text-4xl font-lobster mb-6">
                Denim Insights & Trends
              </h1>
              <p className="text-xl">
                Explore the latest in denim fashion, sustainability, and
                manufacturing innovations.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Blog Grid */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition"
              >
                {/* Blog Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-gray-500 text-xs mt-auto">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-2">
                    {new Date(post.publishDate).toLocaleDateString()}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </div>

      <Footer backgroundImage="/footer.jpeg" transparent />
    </>
  );
};

export default Blog;