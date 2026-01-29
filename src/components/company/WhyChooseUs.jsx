"use client";

import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import img from "../../../public/company/delivery.jpg";

export default function WhyChooseUs() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      gap={{ xs: 4, md: 7 }}
      sx={{ py: { xs: "40px", md: "80px" }, px: { xs: "16px", md: "80px" } }}
    >
      {/* LEFT TEXT */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: ".8rem", md: ".9rem" },
            fontWeight: "bold",
            color: "#03045f",
            mb: "20px",
          }}
        >
          Why Choose Us
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            mb: "20px",
            fontWeight: "bold",
          }}
        >
          We Are The Best And That&apos;s Why You Can Choose Us Easily
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            mb: "20px",
            maxWidth: "600px",
            mx: { xs: "auto", md: "0" },
          }}
        >
Comprehensive Solutions: From import/export trading to freight forwarding, we handle every step of your supply chain efficiently.
<br/>
Reliable Partner Network: Our sister freight-forwarding company ensures safe, timely, and cost-effective transportation worldwide.
<br/>
Expertise & Experience: Years of experience in trading and logistics allow us to navigate regulations, documentation, and market challenges with ease.
        </Typography>
      </Box>

      {/* RIGHT IMAGE */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <Image
          alt="cargo delivery"
          src={img}
          style={{
            width: "100%",
            maxWidth: "580px",
            height: "auto",
            borderRadius: "20px",
          }}
        />
      </Box>
    </Stack>
  );
}
