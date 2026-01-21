import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const QuickContact = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-3">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10">
              Contact us today for a free consultation. We're here to help you succeed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            <a
              href="tel:+918225811142"
              className="flex flex-col items-center p-6 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors border border-primary-foreground/10"
            >
              <Phone className="w-8 h-8 text-gold mb-3" />
              <span className="text-sm text-primary-foreground/60 mb-1">Call Us</span>
              <span className="text-primary-foreground font-medium">+91 82258 11142</span>
            </a>
            <a
              href="https://wa.me/918225811142"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors border border-primary-foreground/10"
            >
              <MessageCircle className="w-8 h-8 text-gold mb-3" />
              <span className="text-sm text-primary-foreground/60 mb-1">WhatsApp</span>
              <span className="text-primary-foreground font-medium">Chat with Us</span>
            </a>
            <a
              href="mailto:info@zenvoraconsulting.com"
              className="flex flex-col items-center p-6 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors border border-primary-foreground/10"
            >
              <Mail className="w-8 h-8 text-gold mb-3" />
              <span className="text-sm text-primary-foreground/60 mb-1">Email</span>
              <span className="text-primary-foreground font-medium">info@zenvoraconsulting.com</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="gap-2 bg-gold hover:bg-gold-dark text-secondary-foreground shadow-gold text-base px-8"
              asChild
            >
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
