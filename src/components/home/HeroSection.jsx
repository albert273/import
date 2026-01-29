"use client";
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#8bcbff",
        position: "relative",
        overflow: "hidden",
        pt: { xs: "100px", md: "240px" },
        pb: { xs: "100px", md: "50" },
        px: { xs: 2, sm: 4, md: 10 },
        minHeight: { md: "85vh" },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%", maxWidth: "1400px", mx: "auto" }}
      >
        {/* LEFT TEXT SECTION */}
        <Stack
          sx={{
            width: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", md: "left" },
            zIndex: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              fontWeight: "900",
              color: "#023E8A",
            }}
          >
            Uni Cargo
          </Typography>


          <Typography
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
              mt: 3,
              color: "#0285b0ff",
              lineHeight: "1.7",
            }}
          >
            Uni-Cargo is a professional trading and logistics company providing
            reliable, efficient, and cost-effective solutions for international
            and domestic markets. We support businesses by managing sourcing,
            trading, transportation, and supply chain operations with complete
            transparency and control
          </Typography>

            <Link href={"/page/company"}>
          <Button
            variant="contained"
            sx={{
              mt: 4,
              background: "linear-gradient(to right, #03045E, #023E8A)",
              width: { xs: "100%", sm: "60%", md: "45%" },
              py: 1.4,
              borderRadius: "10px",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              "&:hover": {
                background: "linear-gradient(to right, #023E8A, #0077B6)",
              },
            }}
          >
            Learn More
          </Button>
          </Link>
        </Stack>
      </Stack>

      {/* ABSOLUTE IMAGE → Touching right & bottom */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: { xs: "90%", sm: "70%", md: "55%", lg: "50%" },
          display: "flex",
          justifyContent: "flex-end",
          display: { xs: "none", md: "block" },
        }}
      >
        <Image
          src="/home/heroSection/hero.png"
          alt="Global Trading Illustration"
          width={800}
          height={700}
          style={{
            width: "100%",
            height: "auto",
          }}
          priority
        />
      </Box>
    </Box>
  );
}
