import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { Users, Award, DollarSign, Headphones } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our experienced professionals bring expertise across multiple domains to deliver exceptional results.",
  },
  {
    icon: Award,
    title: "Multiple Domains",
    description:
      "From tech to academics, we cover diverse fields to provide comprehensive solutions under one roof.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "Quality services at competitive prices. We believe in delivering value without breaking the bank.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    description:
      "From initial consultation to project completion, we're with you every step of the way.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Your Success is Our Priority"
          description="We go above and beyond to ensure your projects succeed"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <feature.icon className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
