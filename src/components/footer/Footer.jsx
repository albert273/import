"use client";

import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import Link from "next/link";
import logo from "../../app/favicon.ico"
import Image from "next/image";

const pages = [
      {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/page/company",
  },
    {
    id: 3,
    title: "Services",
    link: "/page/services",
  },
    {
    id: 4,
    title: "Product",
    link: "/page/product",
  },
];

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#070819",
        color: "white",
        pt: 6,
      }}
    >
      {/* Top Section */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>
        {/* Header Row */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Image src={logo} alt="logo" width={100} height={100}/>

          <Stack direction="row" spacing={2} alignItems="center">
            <Link href={"/page/login"}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#7CF3FF",
                  color: "#000",
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#5be7f5",
                  },
                }}
              >
                Login
              </Button>
            </Link>
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", mb: 4 }} />

        {/* Content */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="space-between"
        >
          {/* Products */}
          <Stack spacing={1}>
            <Typography fontWeight="bold">Products</Typography>
            {["Features", "Integration", "Roadmap"].map((item) => (
              <Typography
                key={item}
                sx={{ fontSize: "0.9rem", opacity: 0.8, cursor: "pointer" }}
              >
                → {item}
              </Typography>
            ))}
          </Stack>

          {/* Company */}
          <Stack spacing={1}>
            <Typography fontWeight="bold">Company</Typography>
            {pages.map((item) => (
              <Link href={item.link} key={item.id}>
                <Typography
                  sx={{ fontSize: "0.9rem", opacity: 0.8, cursor: "pointer" }}
                >
                  → {item.title}
                </Typography>
              </Link>
            ))}
          </Stack>

          {/* Stay in Touch */}
          <Stack spacing={2} sx={{ minWidth: { md: 320 } }}>
            <Typography fontWeight="bold">Stay In Touch</Typography>
            <Typography sx={{ fontSize: "0.85rem", opacity: 0.7 }}>
              Keep Updated!!
            </Typography>

            <Stack direction="row" spacing={1}>
              <TextField
                placeholder="Enter Your Email"
                size="small"
                fullWidth
                sx={{
                  input: { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#7CF3FF",
                    },
                    "&:hover fieldset": {
                      borderColor: "#7CF3FF",
                    },
                  },
                }}
              />
              <Button
                sx={{
                  backgroundColor: "#7CF3FF",
                  color: "#000",
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#5be7f5",
                  },
                }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      {/* Bottom Bar */}
      <Box
        sx={{
          mt: 6,
          py: 2,
          backgroundColor: "#020024",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1200px"
          mx="auto"
          px={3}
          spacing={2}
        >
          <Typography sx={{ fontSize: "0.8rem", opacity: 0.7 }}>
            © 2026 All Rights Reserved.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Typography sx={{ fontSize: "0.8rem", opacity: 0.7 }}>
              Term Of Service
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", opacity: 0.7 }}>
              Policy Service
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
