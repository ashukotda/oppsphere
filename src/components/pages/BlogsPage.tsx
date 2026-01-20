import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { BlogPosts } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { format } from 'date-fns';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPosts[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<BlogPosts>('blogposts');
      setBlogs(result.items);
    } catch (error) {
      console.error('Failed to load blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="w-full pt-32 pb-16">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-8">
              Blog & Articles
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-dark-grey/80">
              Career tips, learning guides, and the latest updates on opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="min-h-[600px]">
            {isLoading ? null : blogs.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {blogs.map((blog, index) => (
                  <motion.article
                    key={blog._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-off-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                  >
                    {blog.coverImage && (
                      <div className="w-full h-56 overflow-hidden">
                        <Image
                          src={blog.coverImage}
                          alt={blog.title || 'Blog cover'}
                          width={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-dark-grey/70 font-paragraph">
                        {blog.author && (
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{blog.author}</span>
                          </div>
                        )}
                        {blog.publicationDate && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{format(new Date(blog.publicationDate), 'MMM dd, yyyy')}</span>
                          </div>
                        )}
                      </div>
                      <h2 className="font-heading text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h2>
                      <p className="font-paragraph text-base text-dark-grey/80 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      {blog.tags && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.tags.split(',').slice(0, 3).map((tag, i) => (
                            <span
                              key={i}
                              className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full font-paragraph"
                            >
                              {tag.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                      <Link
                        to={`/blogs/${blog._id}`}
                        className="inline-flex items-center gap-2 font-paragraph text-base font-semibold text-primary hover:gap-3 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-dark-grey/70">
                  No blog posts available at the moment. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
