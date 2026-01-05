"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import formingTeam from "../../../public/home/ourWork/formingTeam.png";

export default function OurWorkSection() {
  return (
    <Box
      sx={{
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
        <Stack flex={1} textAlign={{ xs: "center", md: "left" }} gap={3}>
          <Stack>
            <Typography
              fontSize={{ xs: "2rem", md: "2.6rem" }}
              fontWeight="800"
              color="#0077B6"
            >
              Introducing Our Work
            </Typography>
          </Stack>

          <Typography fontSize="1.8rem" fontWeight="750" color="#000">
            Tailoring services for global exporters
            <br />
            with personalized attention.
          </Typography>
          <Stack gap={5}>
            <Typography
              fontSize="1rem"
              color="#333"
              lineHeight="1.7"
              maxWidth="520px"
            >
              Our creativity is driven by depth study in an effort to give you
              the best result and position of your product successfully in
              international market.
            </Typography>

            <Typography
              fontSize="1rem"
              color="#333"
              lineHeight="1.7"
              maxWidth="520px"
            >
              We’re on a mission to start studying the exact market for your
              products worldwide and establish the product in appropriate
              market.
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src={formingTeam}
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
      </Stack>
    </Box>
  );
}
