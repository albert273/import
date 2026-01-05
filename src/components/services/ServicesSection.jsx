"use client";

import { Box, Grid, Card, Typography, Link, Stack } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SpeedIcon from "@mui/icons-material/Speed";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";

const services = [
  {
    title: "Air Transport",
    icon: <FlightIcon fontSize="large" />,
  },
  {
    title: "Sea Transport",
    icon: <DirectionsBoatIcon fontSize="large" />,
  },
  {
    title: "Road Transport",
    icon: <LocalShippingIcon fontSize="large" />,
  },
  {
    title: "Fast Freight",
    icon: <SpeedIcon fontSize="large" />,
  },
  {
    title: "Home Delivery",
    icon: <HomeIcon fontSize="large" />,
  },
  {
    title: "Packaging",
    icon: <InventoryIcon fontSize="large" />,
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit porro,
          aliquid reprehenderit iusto inventore
          <br /> sint beatae ipsum impedit in sit numquam illum distinctio sequi
          quisquam et hic tempore
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              nostrum minima eligendi neque labore asperiores.
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
