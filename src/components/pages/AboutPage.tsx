import { motion } from 'framer-motion';
import { Target, Eye, Sparkles, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To deliver verified, meaningful, and growth-focused opportunities on one platform and help individuals grow their skills, careers, and confidence.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To build the world\'s largest ecosystem of opportunities — a place recognized globally as "The Opportunity World," where everyone can find the right chance regardless of their background or skill level.',
  },
  {
    icon: Sparkles,
    title: 'What Makes Us Unique',
    description: 'We aggregate opportunities from multiple sources, verify them for quality, and present them in a clean, easy-to-navigate platform. Everything you need in one place.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-8">
              About OppSphere
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-dark-grey/80">
              Building a world where opportunities are accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="w-full py-16">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Story
            </h2>
            <div className="space-y-6 font-paragraph text-lg text-dark-grey/80">
              <p>
                OppSphere started with a simple idea — to create a world where opportunities are accessible to everyone. Students and young professionals often struggle to find verified internships and career-building chances in one place.
              </p>
              <p>
                OppSphere was born to solve this. With the vision of building "A World Built on Opportunities," the platform aims to empower every learner with the right path to grow.
              </p>
              <p>
                We understand the challenges of navigating multiple platforms, dealing with unverified listings, and missing out on great opportunities simply because they weren't visible. That's why we've created a centralized ecosystem that brings together internships, competitions, jobs, workshops, and learning opportunities from around the world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Unique Value */}
      <section className="w-full bg-off-white py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-background p-8 rounded-lg"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="font-paragraph text-base text-dark-grey/80">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="w-full py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-center mb-8">
              Meet Our Team
            </h2>
            <p className="font-paragraph text-lg text-dark-grey/80 text-center mb-16 max-w-3xl mx-auto">
              We're a passionate team dedicated to connecting people with opportunities that transform careers and lives.
            </p>
            <div className="bg-off-white rounded-2xl p-16 text-center">
              <Users className="w-20 h-20 text-primary mx-auto mb-6" />
              <p className="font-paragraph text-lg text-dark-grey/80">
                Our team is growing! Check back soon to meet the people behind OppSphere.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
