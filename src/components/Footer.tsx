import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  explore: [
    { name: 'Internships', path: '/internships' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Competitions', path: '/competitions' },
    { name: 'Workshops', path: '/workshops' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Partner With Us', path: '/partner' },
    { name: 'Blogs', path: '/blogs' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/privacy#terms' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-dark-grey text-white">
      <div className="max-w-[100rem] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-heading text-3xl font-bold text-white hover:text-primary transition-colors inline-block mb-4">
              OppSphere
            </Link>
            <p className="font-paragraph text-base text-white/80 mb-6 max-w-md">
              A World Built on Opportunities. Discover internships, competitions, jobs, workshops, and learning opportunities all in one place.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-paragraph text-base text-white/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-paragraph text-base text-white/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-paragraph text-base text-white/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="font-heading text-sm font-semibold text-white mb-2">
                Contact
              </h4>
              <a
                href="mailto:hello@oppsphere.com"
                className="font-paragraph text-base text-white/80 hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                hello@oppsphere.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="font-paragraph text-sm text-white/60 text-center">
            © {new Date().getFullYear()} OppSphere. All rights reserved. Building a world of opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
}
