import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import QuickContact from "@/components/home/QuickContact";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <QuickContact />
    </Layout>
  );
};

export default Index;
