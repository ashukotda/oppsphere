import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, TrendingUp, Calendar, ExternalLink } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Opportunities } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Image } from '@/components/ui/image';
import { format } from 'date-fns';

export default function CompetitionsPage() {
  const [opportunities, setOpportunities] = useState<Opportunities[]>([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState<Opportunities[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [skillLevelFilter, setSkillLevelFilter] = useState('all');

  useEffect(() => {
    loadOpportunities();
  }, []);

  useEffect(() => {
    filterOpportunities();
  }, [opportunities, searchTerm, locationFilter, skillLevelFilter]);

  const loadOpportunities = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<Opportunities>('opportunities');
      const competitions = result.items.filter((opp) => opp.category?.toLowerCase() === 'competition');
      setOpportunities(competitions);
    } catch (error) {
      console.error('Failed to load competitions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterOpportunities = () => {
    let filtered = [...opportunities];

    if (searchTerm) {
      filtered = filtered.filter(
        (opp) =>
          opp.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          opp.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          opp.shortDescription?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (locationFilter !== 'all') {
      filtered = filtered.filter((opp) => opp.locationType?.toLowerCase() === locationFilter.toLowerCase());
    }

    if (skillLevelFilter !== 'all') {
      filtered = filtered.filter((opp) => opp.skillLevel?.toLowerCase() === skillLevelFilter.toLowerCase());
    }

    setFilteredOpportunities(filtered);
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
              Competitions
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-dark-grey/80">
              Participate in competitions to showcase your skills and win exciting prizes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-off-white py-8">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-grey/50" />
              <Input
                type="text"
                placeholder="Search competitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background border-neutral-grey/30 font-paragraph"
              />
            </div>

            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="bg-background border-neutral-grey/30 font-paragraph">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>

            <Select value={skillLevelFilter} onValueChange={setSkillLevelFilter}>
              <SelectTrigger className="bg-background border-neutral-grey/30 font-paragraph">
                <SelectValue placeholder="Skill Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="min-h-[600px]">
            {isLoading ? null : filteredOpportunities.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredOpportunities.map((opportunity, index) => (
                  <motion.div
                    key={opportunity._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-off-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    {opportunity.companyLogo && (
                      <div className="w-full h-48 bg-background flex items-center justify-center p-8">
                        <Image
                          src={opportunity.companyLogo}
                          alt={opportunity.companyName || 'Competition logo'}
                          width={200}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {opportunity.title}
                      </h3>
                      <p className="font-paragraph text-sm text-dark-grey/70 mb-4">
                        {opportunity.companyName}
                      </p>
                      <p className="font-paragraph text-base text-dark-grey/80 mb-4 line-clamp-2">
                        {opportunity.shortDescription}
                      </p>
                      <div className="space-y-2 mb-6">
                        {opportunity.locationType && (
                          <div className="flex items-center gap-2 text-sm text-dark-grey/70 font-paragraph">
                            <MapPin className="w-4 h-4" />
                            <span>{opportunity.locationType}</span>
                          </div>
                        )}
                        {opportunity.skillLevel && (
                          <div className="flex items-center gap-2 text-sm text-dark-grey/70 font-paragraph">
                            <TrendingUp className="w-4 h-4" />
                            <span>{opportunity.skillLevel}</span>
                          </div>
                        )}
                        {opportunity.applicationDeadline && (
                          <div className="flex items-center gap-2 text-sm text-dark-grey/70 font-paragraph">
                            <Calendar className="w-4 h-4" />
                            <span>Deadline: {format(new Date(opportunity.applicationDeadline), 'MMM dd, yyyy')}</span>
                          </div>
                        )}
                      </div>
                      {opportunity.applicationLink && (
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg">
                          <a href={opportunity.applicationLink} target="_blank" rel="noopener noreferrer">
                            Register Now
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-dark-grey/70">
                  No competitions found matching your filters. Try adjusting your search criteria.
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
