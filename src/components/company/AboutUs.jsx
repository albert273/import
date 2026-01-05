import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import cargo from "../../../public/company/cargo1.webp";
import CheckIcon from "@mui/icons-material/Check";

export default function AboutUs() {
  const info = [
    { id: "1", text: "24/7 Business Support" },
    { id: "2", text: "Secure Transportation" },
    { id: "3", text: "World Wide Most Effective Business" },
    { id: "4", text: "Easy And Quick Problem Analysis" },
  ];

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 4, md: 8 }}
      sx={{
        width: "100%",
        py: { xs: "40px", md: "80px" },
        px: { xs: 2, sm: 4, md: 10 },
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          alt="cargo"
          src={cargo}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "20px",
            objectFit: "cover",
          }}
          priority
        />
      </Box>

      {/* TEXT CONTENT */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            fontWeight: "bold",
            color: "#03045f",
            mb: 2,
          }}
        >
          About Us
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
            mb: 2,
            fontWeight: "bold",
            lineHeight: 1.2,
            color: "#023E8A",
          }}
        >
          Modern And Trusted Logistics Company
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            mb: 3,
            color: "#555",
            lineHeight: 1.6,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          possimus quae adipisci quisquam distinctio nemo, tempora corrupti
          expedita nihil. Reiciendis impedit voluptates temporibus aut
          consectetur, vitae culpa et.
        </Typography>

        {info.map((item) => (
          <Stack
            key={item.id}
            direction="row"
            alignItems="center"
            gap={2}
            sx={{ mb: 2 }}
          >
            <CheckIcon
              sx={{
                p: "4px",
                borderRadius: "50%",
                fontSize: "22px",
                backgroundColor: "#48cae4",
                color: "white",
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.15rem", md: "1.2rem" },
                fontWeight: "600",
                color: "#023E8A",
              }}
            >
              {item.text}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Stack>
  );
}
