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
          <Stack >
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
              TradeLinkGlobal
            </Typography>
          </Stack>

          <Typography fontSize="1.8rem" fontWeight="750" color="#000" >
            Insights and Resources to help drive
            <br/> your Business Forward Faster.
          </Typography>

          <Typography
            fontSize="1rem"
            color="#333"
            lineHeight="1.7"
            maxWidth="520px"
          >
            We build results-oriented brand strategy and continually refine the
            campaign for the greatest outcome. From full scale branding
            strategy, we are reaching to almost desired buyers throughout the
            world.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
