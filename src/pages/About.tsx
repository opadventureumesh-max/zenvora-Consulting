import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Phone, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

const teamMembers = [
  {
    name: "Jay Prakash Upadhyay",
    role: "Founder",
    phone: "+91 88733 04211",
    initials: "JP",
    description: "Visionary leader with expertise in business strategy and consulting.",
    social: { linkedin: "#", instagram: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Umesh Farkade",
    role: "Executor Head",
    phone: "+91 82258 11142",
    initials: "UF",
    description: "Operations expert ensuring seamless project execution and delivery.",
    social: { linkedin: "#", instagram: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Ranjeet Chaurasiya",
    role: "Social Media Manager",
    phone: "+91 73248 40640",
    initials: "RC",
    description: "Creative strategist driving brand engagement across digital platforms.",
    social: { linkedin: "#", instagram: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Ankit Kumar",
    role: "Developer Team Head",
    phone: "+91 62079 88050",
    initials: "AK",
    description: "Full-stack developer leading innovative web and app solutions.",
    social: { linkedin: "#", instagram: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Ishan Sharma",
    role: "Developer Team Head",
    phone: "+91 88396 24380",
    initials: "IS",
    description: "Tech enthusiast specializing in scalable architecture and modern frameworks.",
    social: { linkedin: "#", instagram: "#", twitter: "#", facebook: "#" },
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-3">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Your Trusted Partner in Success
            </h1>
            <p className="text-lg text-primary-foreground/70">
              We are a team of passionate professionals dedicated to helping businesses and individuals achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-3">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Success Stories Since 2022
              </h2>
              <p className="text-muted-foreground mb-4">
                ZENVORA CONSULTING was founded with a simple mission: to provide comprehensive consulting solutions that empower businesses and individuals to reach their full potential. In just 3 years, we have grown into a trusted partner for 50+ clients across various industries.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team brings together expertise from technology, research, marketing, and business consulting to deliver holistic solutions tailored to your unique needs. We believe in building long-term relationships based on trust, transparency, and tangible results.
              </p>
              <Button
                className="gap-2 bg-gold hover:bg-gold-dark text-secondary-foreground"
                asChild
              >
                <Link to="/contact">
                  Work With Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                <p className="text-4xl font-bold text-gold mb-2">3+</p>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                <p className="text-4xl font-bold text-gold mb-2">50+</p>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                <p className="text-4xl font-bold text-gold mb-2">40+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                <p className="text-4xl font-bold text-gold mb-2">5</p>
                <p className="text-muted-foreground">Team Members</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To provide innovative, reliable, and affordable consulting solutions that help our clients achieve their business and academic objectives. We are committed to delivering excellence through personalized service, cutting-edge technology, and deep industry expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To become the most trusted consulting partner for businesses and academics worldwide. We envision a future where every organization and individual has access to expert guidance that transforms their ideas into successful ventures.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Team"
            title="Meet the Experts"
            description="Our talented professionals are dedicated to your success"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-6 rounded-xl bg-card border border-border text-center hover:shadow-lg hover:bg-primary hover:border-gold/30 transition-all duration-300"
              >
                {/* Photo / Initials Avatar */}
                <div className="w-28 h-28 mx-auto rounded-full bg-primary group-hover:bg-gold flex items-center justify-center mb-4 transition-colors duration-300 overflow-hidden">
                  <span className="text-3xl font-bold text-primary-foreground group-hover:text-secondary-foreground transition-colors duration-300">
                    {member.initials}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary-foreground mb-1 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gold text-sm mb-2 transition-colors duration-300">{member.role}</p>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 mb-4 transition-colors duration-300 line-clamp-2">
                  {member.description}
                </p>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-3 mb-4">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-muted group-hover:bg-primary-foreground/10 flex items-center justify-center text-muted-foreground group-hover:text-primary-foreground/70 hover:!text-gold transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-muted group-hover:bg-primary-foreground/10 flex items-center justify-center text-muted-foreground group-hover:text-primary-foreground/70 hover:!text-gold transition-all">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-muted group-hover:bg-primary-foreground/10 flex items-center justify-center text-muted-foreground group-hover:text-primary-foreground/70 hover:!text-gold transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-muted group-hover:bg-primary-foreground/10 flex items-center justify-center text-muted-foreground group-hover:text-primary-foreground/70 hover:!text-gold transition-all">
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
