import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
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
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            <p className="font-paragraph text-xl text-dark-grey/80">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            {/* Introduction */}
            <div>
              <p className="font-paragraph text-lg text-dark-grey/80 leading-relaxed">
                At OppSphere, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-off-white p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-4 font-paragraph text-base text-dark-grey/80">
                <p>
                  <strong>Personal Information:</strong> When you register on our platform, submit forms, or contact us, we may collect personal information such as your name, email address, phone number, and other contact details.
                </p>
                <p>
                  <strong>Usage Data:</strong> We automatically collect information about your interactions with our website, including IP address, browser type, pages visited, time spent on pages, and other diagnostic data.
                </p>
                <p>
                  <strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to track activity on our website and store certain information to improve your experience.
                </p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-off-white p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  How We Use Your Information
                </h2>
              </div>
              <div className="space-y-4 font-paragraph text-base text-dark-grey/80">
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To provide customer support and respond to your inquiries</li>
                  <li>To send you newsletters, marketing communications, and other information that may interest you</li>
                  <li>To monitor and analyze usage patterns and trends</li>
                  <li>To detect, prevent, and address technical issues and security threats</li>
                  <li>To comply with legal obligations and enforce our terms of service</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-off-white p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Data Security
                </h2>
              </div>
              <div className="space-y-4 font-paragraph text-base text-dark-grey/80">
                <p>
                  The security of your personal information is important to us. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Your Rights
              </h2>
              <div className="space-y-4 font-paragraph text-base text-dark-grey/80">
                <p>You have certain rights regarding your personal information, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The right to access and receive a copy of your personal data</li>
                  <li>The right to correct inaccurate or incomplete information</li>
                  <li>The right to request deletion of your personal data</li>
                  <li>The right to object to or restrict processing of your data</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent at any time</li>
                </ul>
              </div>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Third-Party Services
              </h2>
              <div className="space-y-4 font-paragraph text-base text-dark-grey/80">
                <p>
                  Our website may contain links to third-party websites or services that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
              </div>
            </div>

            {/* Terms of Service */}
            <div id="terms" className="bg-off-white p-8 rounded-lg">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Terms of Service
              </h2>
              <div className="space-y-4 font-paragraph text-base text-dark-grey/80">
                <p>
                  By accessing and using OppSphere, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
                <p>
                  <strong>Use License:</strong> Permission is granted to temporarily access the materials on OppSphere for personal, non-commercial use only. This is the grant of a license, not a transfer of title.
                </p>
                <p>
                  <strong>User Conduct:</strong> You agree not to use the platform for any unlawful purpose or in any way that could damage, disable, or impair the service.
                </p>
                <p>
                  <strong>Disclaimer:</strong> The materials on OppSphere are provided on an 'as is' basis. OppSphere makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Changes to This Privacy Policy
              </h2>
              <div className="space-y-4 font-paragraph text-base text-dark-grey/80">
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="bg-primary/5 p-8 rounded-lg border-2 border-primary/20">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Contact Us
              </h2>
              <div className="space-y-4 font-paragraph text-base text-dark-grey/80">
                <p>
                  If you have any questions about this Privacy Policy or our Terms of Service, please contact us:
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:privacy@oppsphere.com" className="text-primary hover:underline">privacy@oppsphere.com</a>
                </p>
                <p>
                  <strong>General Inquiries:</strong> <a href="mailto:hello@oppsphere.com" className="text-primary hover:underline">hello@oppsphere.com</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
