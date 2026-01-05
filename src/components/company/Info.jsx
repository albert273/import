"use client";

import { Box, Stack, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

const stats = [
  {
    value: "950 +",
    label: "Delivered Packages",
    icon: <LocalShippingOutlinedIcon sx={{ fontSize: "50px" }} />,
  },
  {
    value: "850 +",
    label: "Countries Covered",
    icon: <PublicOutlinedIcon sx={{ fontSize: "50px" }} />,
  },
  {
    value: "550 +",
    label: "Happy Clients",
    icon: <PersonOutlineOutlinedIcon sx={{ fontSize: "50px" }} />,
  },
  {
    value: "440 +",
    label: "Tons Of Goods",
    icon: <Inventory2OutlinedIcon sx={{ fontSize: "50px" }} />,
  },
];

export default function Info() {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "#f9fafb",
        maxHeight: "100%",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {stats.map((stat, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: 250 },
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 0 20px 3px rgba(0, 0, 0, 0.05)",
              p: 4,
              textAlign: "center",
              transition: "all 0.3s ease", 
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)", 
              },
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                width: 64,
                height: 64,
                mx: "auto",
                mb: 2,
                borderRadius: "50%",
                backgroundColor: "#E6F0FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#1E6BFF",
                fontSize: 52,
              }}
            >
              {stat.icon}
            </Box>

            {/* Number */}
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#050748",
              }}
            >
              {stat.value}
            </Typography>

            {/* Label */}
            <Typography
              sx={{
                mt: 1,
                fontSize: "1rem",
                color: "#1E6BFF",
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
