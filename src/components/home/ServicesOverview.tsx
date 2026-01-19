import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Globe,
  BarChart3,
  GraduationCap,
  FileText,
  Rocket,
  Megaphone,
  PenTool,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web & App Development",
    description:
      "Custom websites and mobile applications built with modern technologies.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights for better decisions.",
  },
  {
    icon: GraduationCap,
    title: "Academic Projects",
    description:
      "End-to-end support for academic and industry project development.",
  },
  {
    icon: FileText,
    title: "Research & Documentation",
    description:
      "Professional research papers, theses, and technical documentation.",
  },
  {
    icon: Rocket,
    title: "Startup Consulting",
    description:
      "Complete guidance for company registration and startup launch.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Grow your online presence with targeted marketing strategies.",
  },
  {
    icon: PenTool,
    title: "Article Writing",
    description:
      "High-quality content creation for blogs, websites, and publications.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="What We Offer"
          title="Our Services"
          description="Comprehensive solutions tailored to your business and academic needs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-gold/30"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                <service.icon className="w-7 h-7 text-gold group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="gap-2 bg-primary hover:bg-navy-light"
            asChild
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
