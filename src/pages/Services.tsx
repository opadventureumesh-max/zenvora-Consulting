import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Globe,
  BarChart3,
  GraduationCap,
  FileText,
  Rocket,
  Megaphone,
  PenTool,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web & App Development",
    description:
      "Transform your ideas into powerful digital solutions. We build responsive websites, web applications, and mobile apps using cutting-edge technologies that drive results.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Mobile App Development",
      "UI/UX Design",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Unlock the power of your data with advanced analytics solutions. We help you make data-driven decisions with actionable insights and comprehensive reporting.",
    features: [
      "Business Intelligence",
      "Predictive Analytics",
      "Data Visualization",
      "Custom Dashboards",
    ],
  },
  {
    icon: GraduationCap,
    title: "Academic & Industry Projects",
    description:
      "Comprehensive support for academic projects, final year projects, and industry-grade applications. From concept to completion, we guide you through every step.",
    features: [
      "Final Year Projects",
      "Research Implementation",
      "Prototype Development",
      "Technical Mentoring",
    ],
  },
  {
    icon: FileText,
    title: "Research & Documentation",
    description:
      "Professional research papers, thesis writing, and technical documentation services. We ensure quality, originality, and academic excellence in every project.",
    features: [
      "Research Papers",
      "Thesis & Dissertations",
      "Technical Documentation",
      "Literature Review",
    ],
  },
  {
    icon: Rocket,
    title: "Startup & Company Consulting",
    description:
      "Launch your business with confidence. We provide complete guidance on company registration, business planning, and startup development strategies.",
    features: [
      "Company Registration",
      "Business Planning",
      "Legal Compliance",
      "Funding Guidance",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Grow your online presence and reach your target audience effectively. Our digital marketing strategies are designed to maximize ROI and build brand awareness.",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "PPC Advertising",
    ],
  },
  {
    icon: PenTool,
    title: "Article Writing",
    description:
      "High-quality content creation services for blogs, websites, and publications. Our expert writers deliver engaging, SEO-optimized content that resonates with your audience.",
    features: [
      "Blog Articles",
      "Website Content",
      "Technical Writing",
      "Copywriting",
    ],
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Comprehensive Solutions for Your Success
            </h1>
            <p className="text-lg text-primary-foreground/70">
              We offer a wide range of consulting services tailored to meet your business and academic needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center p-8 rounded-2xl border border-border bg-card ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gold/10 flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-gold" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="gap-2 bg-gold hover:bg-gold-dark text-secondary-foreground"
                    asChild
                  >
                    <Link to="/contact">
                      Enquire Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            subtitle="Get Started"
            title="Ready to Transform Your Ideas?"
            description="Contact us today for a free consultation and let's discuss how we can help you achieve your goals."
          />
          <Button
            size="lg"
            className="gap-2 bg-primary hover:bg-navy-light"
            asChild
          >
            <Link to="/contact">
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
