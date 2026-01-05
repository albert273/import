"use client";

import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import Image from "next/image";

const services = [
  {
    title: "Steel Products",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, dicta necessitatibus",
    image: "/home/services/Rectangle(1).png",
  },
  {
    title: "Plastic Products",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, dicta necessitatibus",
    image: "/home/services/Rectangle(2).png",
  },
  {
    title: "Cement Products",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, dicta necessitatibus",
    image: "/home/services/Rectangle(3).png",
  },
];

export default function ServicesSection() {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 8 },
        background:
          "#03045E",
      }}
    >
      {/* TITLE */}
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        color="#CAF0F8"
        mb={6}
      >
        Services
      </Typography>

      {/* CARDS */}
      <Grid container spacing={6} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                
                borderRadius: "14px",
                overflow: "hidden",
                backgroundColor: "#E0F7FF",
                boxShadow: "5px 15px 55px rgba(255, 255, 255, 0.3)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                },
                width: 320,
                height: 400
              }}
            >
              {/* IMAGE */}
              <Box sx={{ position: "relative", height: 200 }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              {/* CONTENT */}
              <CardContent sx={{ textAlign: "center", p: 3 }}>
                <Typography
                  fontWeight="bold"
                  fontSize="1.5rem"
                  color="#023E8A"
                  mb={1}
                >
                  {service.title}
                </Typography>

                <Typography
                  fontSize="0.84rem"
                  color="#555"
                  mb={3}
                >
                  {service.description}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#03045E",
                    borderRadius: "8px",
                    px: 3,
                    "&:hover": {
                      backgroundColor: "#023E8A",
                    },
                  }}
                >
                  Read more
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
