import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { BlogPosts } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { format } from 'date-fns';

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogPosts | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadBlog();
  }, [id]);

  const loadBlog = async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      const data = await BaseCrudService.getById<BlogPosts>('blogposts', id);
      setBlog(data);
    } catch (error) {
      console.error('Failed to load blog:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="w-full pt-32 pb-16">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="min-h-[600px]">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <LoadingSpinner />
              </div>
            ) : !blog ? (
              <div className="text-center py-20">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Blog Post Not Found
                </h2>
                <p className="font-paragraph text-lg text-dark-grey/70 mb-8">
                  The blog post you're looking for doesn't exist or has been removed.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg">
                  <Link to="/blogs">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blogs
                  </Link>
                </Button>
              </div>
            ) : (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <Button asChild variant="ghost" className="mb-8 font-paragraph">
                  <Link to="/blogs">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blogs
                  </Link>
                </Button>

                {blog.coverImage && (
                  <div className="w-full h-96 rounded-2xl overflow-hidden mb-8">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title || 'Blog cover'}
                      width={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="flex items-center gap-6 mb-6 text-sm text-dark-grey/70 font-paragraph">
                  {blog.author && (
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      <span>{blog.author}</span>
                    </div>
                  )}
                  {blog.publicationDate && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{format(new Date(blog.publicationDate), 'MMMM dd, yyyy')}</span>
                    </div>
                  )}
                </div>

                <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                  {blog.title}
                </h1>

                {blog.excerpt && (
                  <p className="font-paragraph text-xl text-dark-grey/80 mb-8 leading-relaxed">
                    {blog.excerpt}
                  </p>
                )}

                {blog.tags && (
                  <div className="flex flex-wrap gap-2 mb-12">
                    {blog.tags.split(',').map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full font-paragraph"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}

                {blog.content && (
                  <div className="prose prose-lg max-w-none">
                    <div className="font-paragraph text-lg text-dark-grey/90 leading-relaxed whitespace-pre-wrap">
                      {blog.content}
                    </div>
                  </div>
                )}

                <div className="mt-16 pt-8 border-t border-neutral-grey/20">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg">
                    <Link to="/blogs">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to All Blogs
                    </Link>
                  </Button>
                </div>
              </motion.article>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
