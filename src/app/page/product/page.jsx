"use client";

import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// images (replace with your real assets)
import packagingImg from "../../../../public/product/product1.png";
import consumerImg from "../../../../public/product/product2.png";
import medicalImg from "../../../../public/product/product3.png";

export default function IndustriesSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 20 },
        px: { xs: 2, sm: 4, md: 10 },
        background: "radial-gradient(circle at top left, #7fe7f3, #ffffff 45%)",
        overflow: "hidden",
      }}
    >
      {/* TOP ROW */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        mb={{ xs: 6, md: 8 }}
      >
        <IndustryCard title="Packaging" image={packagingImg} />
        <IndustryCard title="Consumer Goods" image={consumerImg} />
      </Stack>

      {/* BOTTOM CENTER CARD */}
      <Stack alignItems="center">
        <IndustryCard title="Medical and Healthcare" image={medicalImg} large />
      </Stack>
    </Box>
  );
}

function IndustryCard({ title, image, large = false }) {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "90%",
          md: large ? "60%" : "40%",
        },
        p: { xs: 3, sm: 4 },
        borderRadius: "20px",
        backgroundColor: "#d7f5fa",
        boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: { xs: "center", sm: "left" },
        gap: { xs: 3, sm: 0 },
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          width: { xs: 120, sm: 140 },
          height: { xs: 120, sm: 140 },
          position: "relative",
        }}
      >
        <Image src={image} alt={title} fill style={{ objectFit: "contain" }} />
      </Box>

      {/* TEXT */}
      <Stack spacing={2}>
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            fontWeight: 700,
            color: "#0b3c89",
          }}
        >
          {title}
        </Typography>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            width: "fit-content",
            mx: { xs: "auto", sm: 0 },
            borderRadius: "10px",
            px: 3,
            backgroundColor: "#083b8a",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#062f6e",
            },
          }}
        >
          Checkout
        </Button>
      </Stack>
    </Box>
  );
}
