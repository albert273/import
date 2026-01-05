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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ratione
          eveniet eum. Quam enim inventore, exercitationem error ad temporibus
          sit facere quaerat architecto impedit ullam quasi vitae distinctio eos
          labore?
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
