import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import cargo from "../../../public/company/cargo1.webp";
import CheckIcon from "@mui/icons-material/Check";

export default function AboutUs() {

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
          Uni-Cargo is a trusted import and export company, providing reliable
          trading solutions to businesses locally and internationally. We
          specialize in sourcing, trading, and delivering goods efficiently
          while ensuring full compliance with all regulatory requirements.
        </Typography>

        <Stack
          gap={2}
          sx={{ mb: 2 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2rem" },
              mb: .5,
              fontWeight: "bold",
              color: "#023E8A",
            }}
          >
            Our Sister Company
          </Typography>
          Our sister company is a dedicated freight forwarding service, handling
          sea, air, and road shipments. Together, we provide seamless logistics
          and end-to-end solutions, from sourcing to delivery, ensuring your
          cargo moves safely, on time, and cost-effectively.
        </Stack>
      </Box>
    </Stack>
  );
}
