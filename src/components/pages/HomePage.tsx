// HPI 1.7-G
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { 
  Briefcase, 
  Trophy, 
  GraduationCap,
  Users, 
  BookOpen, 
  ArrowRight, 
  Globe, 
  Target, 
  Zap, 
  CheckCircle,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

// --- CANONICAL DATA SOURCES ---
// Preserved exactly from original code
const categories = [
  { name: 'Internships', icon: Briefcase, path: '/internships', color: 'bg-accent-blue' },
  { name: 'Jobs', icon: Users, path: '/jobs', color: 'bg-accent-blue' },
  { name: 'Competitions', icon: Trophy, path: '/competitions', color: 'bg-accent-purple' },
  { name: 'Workshops', icon: GraduationCap, path: '/workshops', color: 'bg-accent-purple' },
  { name: 'Blogs', icon: BookOpen, path: '/blogs', color: 'bg-dark-grey' },
];

const features = [
  {
    icon: Globe,
    title: 'Global Opportunities',
    description: 'Access verified opportunities from around the world in one unified platform.',
  },
  {
    icon: Target,
    title: 'Precise Filtering',
    description: 'Find exactly what you need with advanced filters for category, location, and skill level.',
  },
  {
    icon: Zap,
    title: 'Real-Time Updates',
    description: 'Stay ahead with the latest opportunities updated daily from trusted sources.',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineering Intern',
    content: 'OppSphere helped me land my dream internship at a Fortune 500 company. The platform made it so easy to find verified opportunities.',
    image: 'https://static.wixstatic.com/media/0eba7f_166a828733a04d6d8e5e0d0dcbd83aea~mv2.png?originWidth=128&originHeight=128',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Marketing Professional',
    content: 'I discovered amazing workshops and competitions that helped me upskill and grow my career. Highly recommend OppSphere!',
    image: 'https://static.wixstatic.com/media/0eba7f_1270815b626f4efaa85de0f967d65f02~mv2.png?originWidth=128&originHeight=128',
  },
  {
    name: 'Priya Sharma',
    role: 'Recent Graduate',
    content: 'The variety of opportunities on OppSphere is incredible. From internships to learning programs, everything is in one place.',
    image: 'https://static.wixstatic.com/media/0eba7f_04cbba61ec9c4fd599a494fc5fb145be~mv2.png?originWidth=128&originHeight=128',
  },
];

// --- UTILITY COMPONENTS ---

const SectionDivider = () => (
  <div className="w-full flex justify-center items-center py-12 opacity-20">
    <div className="h-px w-24 bg-foreground/50" />
    <div className="mx-4 text-foreground/50 text-xs tracking-[0.2em]">OPPSPHERE</div>
    <div className="h-px w-24 bg-foreground/50" />
  </div>
);

const MarqueeItem = ({ text }: { text: string }) => (
  <div className="flex items-center mx-8">
    <span className="text-4xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground/10 to-foreground/30 uppercase tracking-tighter">
      {text}
    </span>
    <div className="w-3 h-3 rounded-full bg-primary/20 ml-8" />
  </div>
);

export default function HomePage() {
  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-clip selection:bg-primary/20 selection:text-primary">
      <style>{`
        .hero-gradient {
          background: radial-gradient(circle at 50% 50%, rgba(0, 122, 255, 0.08) 0%, rgba(138, 43, 226, 0.05) 30%, transparent 70%);
        }
        .text-stroke {
          -webkit-text-stroke: 1px rgba(0,0,0,0.1);
          color: transparent;
        }
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
      `}</style>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <Header />

      <main className="w-full flex flex-col items-center">
        
        {/* --- HERO SECTION --- */}
        <section className="relative w-full min-h-[95vh] flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
          {/* Background Atmosphere */}
          <div className="absolute inset-0 hero-gradient pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://static.wixstatic.com/media/0eba7f_31ac8685063f4c478fc4ac4e3c92e09e~mv2.png?originWidth=576&originHeight=576')] opacity-[0.03] bg-repeat mix-blend-multiply pointer-events-none" />
          
          {/* Animated Grid Lines */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute left-[10%] top-0 bottom-0 w-px bg-foreground/5" />
            <div className="absolute right-[10%] top-0 bottom-0 w-px bg-foreground/5" />
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-foreground/5" />
          </div>

          <div className="relative z-10 max-w-[100rem] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase bg-primary/5">
                  The Opportunity Ecosystem
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight text-foreground mb-8"
              >
                A World <br />
                <span className="text-primary">Built on</span> <br />
                Opportunities.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-paragraph text-xl md:text-2xl text-dark-grey/70 max-w-2xl leading-relaxed mb-10"
              >
                OppSphere is the global ecosystem connecting you to internships, competitions, and career-defining moments. Your future starts here.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105">
                  <Link to="/opportunities">
                    Explore Opportunities <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-2 border-foreground/10 hover:bg-foreground/5 text-foreground rounded-full transition-all">
                  <Link to="/about">Our Vision</Link>
                </Button>
              </motion.div>
            </div>

            {/* Hero Visual / Abstract */}
            <div className="lg:col-span-4 relative h-[50vh] lg:h-auto w-full flex items-center justify-center">
               <motion.div
                 initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
                 transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                 className="relative w-full aspect-square max-w-md"
               >
                 <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 rounded-full blur-3xl animate-pulse" />
                 <Image 
                   src="https://static.wixstatic.com/media/0eba7f_5f03ffe8b6a24a1a80ab4efbd90426e7~mv2.png?originWidth=576&originHeight=576" 
                   alt="OppSphere Ecosystem" 
                   className="w-full h-full object-cover rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out border border-white/20"
                 />
                 {/* Floating Badge */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
                 >
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Verified</p>
                      <p className="text-sm font-bold text-gray-900">Daily Updates</p>
                    </div>
                 </motion.div>
               </motion.div>
            </div>
          </div>
        </section>

        {/* --- INFINITE MARQUEE --- */}
        <section className="w-full py-12 border-y border-foreground/5 bg-off-white overflow-hidden">
          <div className="relative flex overflow-x-hidden group">
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
              {[...categories, ...categories, ...categories].map((cat, i) => (
                <MarqueeItem key={`${cat.name}-${i}`} text={cat.name} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- BENTO GRID CATEGORIES --- */}
        <section className="w-full py-32 px-6 bg-background relative">
          <div className="max-w-[100rem] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Find Your Path</h2>
                <p className="font-paragraph text-lg text-dark-grey/70">
                  Navigate through our curated ecosystem. Whether you're looking to learn, earn, or compete, we have a dedicated space for you.
                </p>
              </div>
              <Button variant="ghost" className="hidden md:flex group text-primary font-semibold text-lg">
                View All Categories <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[300px]">
              {categories.map((category, index) => {
                const Icon = category.icon;
                // Dynamic sizing for bento grid effect
                const colSpan = index < 2 ? "lg:col-span-3" : "lg:col-span-2";
                
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`${colSpan} group relative overflow-hidden rounded-3xl border border-foreground/5 bg-off-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500`}
                  >
                    <Link to={category.path} className="block w-full h-full p-8 flex flex-col justify-between relative z-10">
                      <div className="flex justify-between items-start">
                        <div className={`p-4 rounded-2xl ${category.color} bg-opacity-10 text-primary`}>
                          <Icon className={`w-8 h-8 ${index < 2 ? 'w-10 h-10' : ''} text-foreground`} />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                          <ArrowUpRight className="w-5 h-5 text-foreground" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="font-paragraph text-sm text-dark-grey/60 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          Explore {category.name.toLowerCase()} opportunities &rarr;
                        </p>
                      </div>
                    </Link>
                    
                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${category.color}`} />
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-foreground/5 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* --- STICKY SCROLL FEATURES --- */}
        <section className="w-full py-32 px-6 bg-off-white relative">
          <div className="max-w-[100rem] mx-auto">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Sticky Header */}
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-tight">
                    Why <br /><span className="text-primary">OppSphere?</span>
                  </h2>
                  <p className="font-paragraph text-xl text-dark-grey/70 mb-12">
                    We've engineered a platform that doesn't just list opportunities—it curates your path to success.
                  </p>
                  <div className="hidden lg:block">
                    <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6">
                      <Link to="/about">Read Our Story</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Scrolling Features */}
              <div className="lg:w-2/3 flex flex-col gap-24">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="group bg-background p-12 rounded-[2rem] border border-foreground/5 hover:border-primary/20 transition-colors duration-500 shadow-sm hover:shadow-xl"
                    >
                      <div className="mb-8 inline-flex p-5 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon className="w-10 h-10" />
                      </div>
                      <h3 className="font-heading text-3xl font-bold mb-4 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="font-paragraph text-lg text-dark-grey/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* --- VISUAL BREATHER / PARALLAX --- */}
        <section className="w-full h-[80vh] relative flex items-center justify-center overflow-hidden clip-diagonal">
          <div className="absolute inset-0 bg-dark-grey">
            <Image 
              src="https://static.wixstatic.com/media/0eba7f_71663ee05900424f98c7aec430256f71~mv2.png?originWidth=1152&originHeight=768" 
              alt="Abstract Background" 
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-5xl md:text-7xl font-bold text-white mb-8"
            >
              "The future belongs to those who prepare for it today."
            </motion.h2>
            <p className="text-white/60 text-xl font-paragraph tracking-widest uppercase">Malcolm X</p>
          </div>
        </section>

        {/* --- TESTIMONIALS SLIDER --- */}
        <section className="w-full py-32 px-6 bg-background overflow-hidden">
          <div className="max-w-[100rem] mx-auto mb-16 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Community Voices</h2>
            <p className="font-paragraph text-lg text-dark-grey/60">Hear from the people building their future with us.</p>
          </div>
          
          <div className="relative w-full max-w-[120rem] mx-auto">
            <div className="flex flex-wrap justify-center gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full md:w-[400px] bg-off-white p-10 rounded-3xl border border-foreground/5 hover:border-primary/20 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full">
                        <Zap className="w-3 h-3" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-foreground">{testimonial.name}</h4>
                      <p className="font-paragraph text-sm text-primary font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="font-paragraph text-dark-grey/80 italic leading-relaxed flex-grow">
                    "{testimonial.content}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="w-full py-24 px-6">
          <div className="max-w-[100rem] mx-auto">
            <div className="relative rounded-[3rem] bg-primary overflow-hidden px-8 py-24 md:px-20 md:py-32 text-center">
              {/* Decorative Circles */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
              
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                  Your Opportunity Awaits.
                </h2>
                <p className="font-paragraph text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
                  Join the ecosystem where ambition meets opportunity. Start your journey today and define your tomorrow.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button asChild size="lg" className="h-16 px-10 text-lg bg-white text-primary hover:bg-white/90 font-bold rounded-full shadow-xl transition-transform hover:scale-105">
                    <Link to="/opportunities">Get Started Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-16 px-10 text-lg border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-full backdrop-blur-sm">
                    <Link to="/partner">Partner With Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}