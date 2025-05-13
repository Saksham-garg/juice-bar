import "./App.css";
import {
  AboutSection,
  BenefitsSection,
  ContactSection,
  FooterSection,
  HeroSection,
  MenuSection,
  NewsLetterSection,
  TestimonialsSection,
} from "./components";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <BenefitsSection />
      <TestimonialsSection />
      <NewsLetterSection />
      <ContactSection />
      <FooterSection />
    </MainLayout>
  );
}

export default App;
