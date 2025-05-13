import "./App.css";
import Navbar from "./atoms/Navbar/Navbar";
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
      <Navbar />
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
