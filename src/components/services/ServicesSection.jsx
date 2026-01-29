"use client";

import { Box, Grid, Card, Typography, Link, Stack } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SpeedIcon from "@mui/icons-material/Speed";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Description } from "@mui/icons-material";

const services = [
  {
    title: "Freight Forwarding",
    icon: <FlightIcon fontSize="large" />,
    description:"We manage sea, air, and road shipments, ensuring timely delivery and full cargo tracking worldwide."
  },
  {
    title: " International Trading",
    icon: <DirectionsBoatIcon fontSize="large" />,
    description:"We provide import and export solutions, helping businesses source and sell products efficiently."

  },
  {
    title: "Customs Clearance",
    icon: <LocalShippingIcon fontSize="large" />,
    description:"Our team handles all documentation and compliance, ensuring smooth and fast customs processing."
  },
  {
    title: "License Rental",
    icon: <SpeedIcon fontSize="large" />,
    description:"We offer temporary import and export licenses, enabling businesses to trade legally without permanent registration."
  },
  {
    title: "Supply Chain Solutions",
    icon: <HomeIcon fontSize="large" />,
    description:"From warehousing to distribution, we streamline your logistics for cost-effective and reliable operations."
  },
  {
    title: " Cargo Insurance & Consultation",
    icon: <InventoryIcon fontSize="large" />,
    description:"We provide insurance and expert guidance on trade and logistics, minimizing risks and optimizing processes."
  },
];

export default function ServicesSection() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f9f9f9" }}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ textAlign: "center", mb: "20px" }}
        gap={2}
      >
        <Typography
          sx={{
            fontSize: "16px",
            display: "block",
            color: "#0383ff",
          }}
        >
          Our Services
        </Typography>
        <Typography
          sx={{ fontSize: "40px", fontWeight: "bold", color: "black" }}
        >
          We Are Trusted For Our Services
        </Typography>
        <Typography sx={{ fontSize: "16px", color: "#555555" }}>
          Transparent & Trustworthy: We operate with integrity, keeping you
          informed at every stage of your trade and logistics operations.
        </Typography>
      </Stack>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={4}>
        {services.map((service, index) => (
          <Card
            key={index}
            sx={{
              width: {
                xs: "100%",
                sm: "48%",
                md: "30%",
              },
              p: 4,
              textAlign: "center",
              borderRadius: "16px",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.06)",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
              },
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                width: 80,
                height: 80,
                mx: "auto",
                mb: 3,
                borderRadius: "50%",
                backgroundColor: "#e8f1ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0d6efd",
              }}
            >
              {service.icon}
            </Box>

            {/* Title */}
            <Typography variant="h6" fontWeight={700} mb={2}>
              {service.title}
            </Typography>

            {/* Description */}
            <Typography variant="body2" color="text.secondary" mb={3}>
              {service.description}
            </Typography>

            {/* Read More */}
            <Link href="#" underline="none" fontWeight={600}>
              Read More
            </Link>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
