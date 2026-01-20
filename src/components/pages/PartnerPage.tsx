import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Globe, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const benefits = [
  {
    icon: Users,
    title: 'Reach Talented Candidates',
    description: 'Connect with thousands of motivated students and professionals actively seeking opportunities.',
  },
  {
    icon: TrendingUp,
    title: 'Boost Your Brand',
    description: 'Increase your company visibility among the next generation of talent and build your employer brand.',
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    description: 'Showcase your opportunities to a worldwide audience and attract diverse talent from around the globe.',
  },
];

export default function PartnerPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    opportunityType: '',
    opportunityTitle: '',
    description: '',
    website: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Partnership Request Submitted!',
      description: 'Thank you for your interest. Our team will review your submission and get back to you soon.',
    });

    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      opportunityType: '',
      opportunityTitle: '',
      description: '',
      website: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, opportunityType: value });
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
              Partner With OppSphere
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-dark-grey/80">
              Join us in building a world of opportunities. Post your internships, jobs, competitions, and workshops to reach talented individuals worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-off-white py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="font-paragraph text-base text-dark-grey/80">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="w-full py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-off-white p-8 md:p-12 rounded-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-bold text-foreground">
                    Submit Your Opportunity
                  </h2>
                  <p className="font-paragraph text-base text-dark-grey/70">
                    Fill out the form below to get started
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
                      Company Name *
                    </label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="bg-background border-neutral-grey/30 font-paragraph"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactName" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
                      Contact Name *
                    </label>
                    <Input
                      id="contactName"
                      name="contactName"
                      type="text"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="bg-background border-neutral-grey/30 font-paragraph"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-neutral-grey/30 font-paragraph"
                      placeholder="contact@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background border-neutral-grey/30 font-paragraph"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
                    Company Website
                  </label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    className="bg-background border-neutral-grey/30 font-paragraph"
                    placeholder="https://yourcompany.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="opportunityType" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
                      Opportunity Type *
                    </label>
                    <Select value={formData.opportunityType} onValueChange={handleSelectChange} required>
                      <SelectTrigger className="bg-background border-neutral-grey/30 font-paragraph">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="internship">Internship</SelectItem>
                        <SelectItem value="job">Job</SelectItem>
                        <SelectItem value="competition">Competition</SelectItem>
                        <SelectItem value="workshop">Workshop</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="opportunityTitle" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
                      Opportunity Title *
                    </label>
                    <Input
                      id="opportunityTitle"
                      name="opportunityTitle"
                      type="text"
                      value={formData.opportunityTitle}
                      onChange={handleChange}
                      required
                      className="bg-background border-neutral-grey/30 font-paragraph"
                      placeholder="e.g., Software Engineering Intern"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block font-paragraph text-sm font-semibold text-foreground mb-2">
                    Opportunity Description *
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-neutral-grey/30 font-paragraph resize-none"
                    placeholder="Provide details about the opportunity, requirements, benefits, etc."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-lg"
                >
                  Submit Partnership Request
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
