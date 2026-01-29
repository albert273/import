"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import shipping from "../../../public/company/shipping.jpg";

export default function CompanyHero() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#8bcbff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: { xs: "90px", md: "120px" },
        px: { xs: 2, sm: 4, md: 10 },
        pb: { xs: "20px", md: "50px" }
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: "100%",
          maxWidth: "1400px",
          gap: { xs: 4, md: 0 },
        }}
      >
        {/* LEFT TEXT SECTION */}
        <Stack
          sx={{
            width: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              fontWeight: "900",
              color: "#023E8A",
            }}
          >
            Company
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" },
              mt: 2,
              color: "#0077B6",
              lineHeight: "1.7",
            }}
          >
            At Uni Cargo, we are committed to providing reliable, efficient, <br/>and transparent trade services tailored to meet the needs of businesses operating in today’s global market
          </Typography>
        </Stack>

        {/* RIGHT IMAGE - Responsive & Hidden on very small screens */}
          <Box
                    sx={{
                      width: { xs: "100%", md: "55%" },
                      display: "flex",
                      justifyContent: { xs: "center", md: "flex-end" },
                    }}
                  >
                    <Image
                      src={shipping}
                      alt="Global shipping"
                      style={{
                        width: "100%",
                        maxWidth: "650px",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                      priority
                    />
                  </Box>
      </Stack>
    </Box>
  );
}
