"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#8bcbff",
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 8 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        alignItems="center"
        maxWidth="1400px"
        mx="auto"
      >
        {/* LEFT IMAGE */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/home/aboutCompany/about.png"
            alt="About TradeLinkGlobal"
            width={520}
            height={420}
            style={{
              width: "100%",
              maxWidth: "620px",
              height: "auto",
            }}
          />
        </Box>

        {/* RIGHT CONTENT */}
        <Stack flex={1} textAlign={{ xs: "center", md: "left" }} gap={3}>
          <Stack>
            <Typography
              fontSize={{ xs: "2rem", md: "2.6rem" }}
              fontWeight="800"
              color="#023E8A"
            >
              About
            </Typography>
            <Typography
              fontSize={{ xs: "2rem", md: "2.6rem" }}
              fontWeight="800"
              color="#0077B6"
              sx={{ ml: "40px" }}
            >
              Uni Cargo
            </Typography>
          </Stack>

          <Typography fontSize="1.1rem" fontWeight="750" color="#000">
            Uni-Cargo is a leading import and export company, providing
            businesses with reliable trading solutions across various markets.
            We help clients source, sell, and move goods efficiently while
            ensuring compliance with all trade regulations.
          </Typography>

          <Typography
            fontSize="1rem"
            color="#333"
            lineHeight="1.7"
            maxWidth="520px"
          >
Our sister company, a specialized freight forwarding service, supports seamless transportation and logistics, offering end-to-end solutions for sea, air, and road shipments. Together, we ensure smooth operations from sourcing to delivery.
<br/>
Uni-Cargo is committed to reliability, transparency, and helping businesses grow through efficient trade and logistics solutions.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
