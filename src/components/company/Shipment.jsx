"use client";

import { Box, Stack, Typography, Button } from "@mui/material";
import shipment from "../../../public/company/shipment-bg.jpg";
import Link from "next/link";
export default function ShipmentCTA() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "70vh", md: "80vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        backgroundImage: `url(${shipment.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          px: 3,
        }}
      >
        <Stack spacing={3} alignItems="center">
          {/* Tag */}
          <Typography
            sx={{
              color: "#4DE1FF",
              letterSpacing: "2px",
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            Shipment
          </Typography>

          {/* Title */}
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontWeight: "bold",
              lineHeight: 1.2,
            }}
          >
            Are You A Shipper? Please Knock Us
            <br />
            On The Below Button
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              maxWidth: 700,
              fontSize: "0.95rem",
              opacity: 0.85,
              lineHeight: 1.8,
            }}
          >
            Uni Cargo is an import and export company that offers comprehensive
            supply chain solutions, ensuring seamless execution of all import
            and export operations on behalf of clients. Our services include
            full logistics support and customs clearance at all ports, backed by
            an international network of agents to facilitate door-to-door
            delivery and receipt of goods.
          </Typography>

          {/* Buttons */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={2}>
            <Link href={"/page/getQuote"}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0178fe",
                  px: 4,
                  py: 1.2,
                  textTransform: "none",
                  borderRadius: "6px",
                  "&:hover": {
                    backgroundColor: "#1558cc",
                  },
                }}
              >
                Make A Shipment
              </Button>
            </Link>
            <Link href={"/page/contactUs"}>
              <Button
                variant="outlined"
                sx={{
                  color: "#4DE1FF",
                  borderColor: "#4DE1FF",
                  px: 4,
                  py: 1.2,
                  textTransform: "none",
                  borderRadius: "6px",
                  "&:hover": {
                    borderColor: "#4DE1FF",
                    backgroundColor: "rgba(77,225,255,0.1)",
                  },
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
