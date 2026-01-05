"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import backgroundImg from "../../../public/home/Experience/Experience.png";
import icon1 from "../../../public/home/Experience/shipping.png";
import icon2 from "../../../public/home/Experience/customer.png";
import icon3 from "../../../public/home/Experience/customer-satisfaction.png";

const stats = [
  {
    id: 1,
    value: "1500+",
    label: "Consignment Done",
    icon: icon1,
  },
  {
    id: 2,
    value: "150+",
    label: "Happy Buyers",
    icon: icon2,
  },
  {
    id: 3,
    value: "10+",
    label: "Years Experience",
    icon: icon3,
  },
];

export default function StatsSection() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 8, md: 16 },
        px: { xs: 2, md: 12 },
        backgroundColor: "#0B3C91",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND ILLUSTRATION */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.9,
        }}
      >
        <Image
          src={backgroundImg}
          alt="Stats background"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Box>

      {/* CONTENT */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        justifyContent="center"
        alignItems="center"
        position="relative"
        zIndex={1}
        maxWidth="1200px"
        mx="auto"
      >
        {stats.map((stat, index) => (
          <Box
            key={stat.id}
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              px: 4,
              py: 3,
              minWidth: 180,
              textAlign: "center",
              boxShadow: "0px 15px 35px rgba(255, 255, 255, 0.5)",
              mt: {
                xs: 0,
                md: stat.id === 2 ? 6: -6,
              },

              transform: {
                md: stat.id === 2 ? "translateY(60px)" : "translateY(-60px)",
              },
            }}

          >
            {/* ICON */}
            <Box
              sx={{
                width: 75,
                height: 75,
                mx: "auto",
                mb: 2,
                borderRadius: "12px",
                backgroundColor: "#0077B6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src={stat.icon} alt={stat.label} width={45} height={45} />
            </Box>

            {/* NUMBER */}
            <Typography fontSize="1.6rem" fontWeight="800" color="#023E8A">
              {stat.value}
            </Typography>

            {/* LABEL */}
            <Typography fontSize="0.95rem" color="#0077B6" mt={0.5}>
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
