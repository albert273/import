
import AboutUs from "@/components/company/AboutUs";
import CompanyHero from "@/components/company/CompanyHero";
import Info from "@/components/company/Info";
import ShipmentCTA from "@/components/company/Shipment";
import WhyChooseUs from "@/components/company/WhyChooseUs";
import { Box } from "@mui/material";


export default function Company() {
  return (
    <Box >
        <CompanyHero />
        <AboutUs/>
        <Info/>
        <ShipmentCTA />
        <WhyChooseUs/>
    </Box>
  );
}
