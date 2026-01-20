import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Instagram, Facebook, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:bg-[#0077B5]' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:bg-[#1DA1F2]' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: 'hover:bg-[#E4405F]' },
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com', color: 'hover:bg-[#1877F2]' },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We\'ll get back to you soon.',
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              Get In Touch
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-dark-grey/80">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Email Us
                  </h3>
                  <a
                    href="mailto:hello@oppsphere.com"
                    className="flex items-center gap-3 font-paragraph text-lg text-dark-grey/80 hover:text-primary transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                    hello@oppsphere.com
                  </a>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 bg-off-white ${social.color} rounded-lg flex items-center justify-center transition-all hover:scale-110`}
                          aria-label={social.name}
                        >
                          <Icon className="w-6 h-6 text-foreground" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-off-white p-8 rounded-lg">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 font-paragraph text-base text-dark-grey/80">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-off-white p-8 rounded-lg">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-neutral-grey/30 font-paragraph"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-neutral-grey/30 font-paragraph"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background border-neutral-grey/30 font-paragraph"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background border-neutral-grey/30 font-paragraph resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-lg"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
