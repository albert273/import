
import { Box } from "@mui/material";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "@/components/home/Services";
import AboutSection from "@/components/home/About";
import StatsSection from "@/components/home/Experience";
import OurWorkSection from "@/components/home/OurWork";
import Team from "@/components/home/Team";
import OurClients from "@/components/home/OurClients";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <Box >
      <HeroSection/>
      <ServicesSection/>
      <AboutSection />
      <StatsSection />
      <OurWorkSection/>
      <Team />
      <OurClients />
    </Box>
  );
}
