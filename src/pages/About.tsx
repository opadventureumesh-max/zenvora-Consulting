import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    phone: "+91 98765 43210",
    image: "RS",
  },
  {
    name: "Priya Patel",
    role: "Technical Lead",
    phone: "+91 98765 43211",
    image: "PP",
  },
  {
    name: "Amit Kumar",
    role: "Project Manager",
    phone: "+91 98765 43212",
    image: "AK",
  },
  {
    name: "Neha Singh",
    role: "Research Head",
    phone: "+91 98765 43213",
    image: "NS",
  },
  {
    name: "Vikash Gupta",
    role: "Marketing Lead",
    phone: "+91 98765 43214",
    image: "VG",
  },
  {
    name: "Anita Verma",
    role: "Content Specialist",
    phone: "+91 98765 43215",
    image: "AV",
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
                Building Success Stories Since 2014
              </h2>
              <p className="text-muted-foreground mb-4">
                ConsultPro was founded with a simple mission: to provide comprehensive consulting solutions that empower businesses and individuals to reach their full potential. Over the years, we have grown into a trusted partner for hundreds of clients across various industries.
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
                <p className="text-4xl font-bold text-gold mb-2">10+</p>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                <p className="text-4xl font-bold text-gold mb-2">500+</p>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                <p className="text-4xl font-bold text-gold mb-2">1000+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                <p className="text-4xl font-bold text-gold mb-2">50+</p>
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
                className="p-6 rounded-xl bg-card border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-primary flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.image}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-gold text-sm mb-4">{member.role}</p>
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
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
