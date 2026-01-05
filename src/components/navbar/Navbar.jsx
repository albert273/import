"use client";
import { Box, Button, Stack, Typography, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { useState } from "react";
import logo from "../../app/favicon.ico"
import Image from "next/image";
export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Stack
        sx={{
          backgroundColor: "#48CAE4",
          width: "100%",
          maxWidth: { xs: "100%", md: "90%" },
          marginTop: "20px",
          borderRadius: {xs: 0,md:"15px"},
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          top: 0,
          zIndex: 1200,
          boxShadow: "0px 5px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Stack sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* LOGO */}
            <Image src={logo} alt="logo" width={80} height={80} />

            {/* Desktop Navigation */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
              sx={{
                display: { xs: "none", md: "flex" },
                color: "#023E8A",
              }}
            >
              {[
                { label: "Home", href: "/" },
                { label: "Company", href: "/company" },
                { label: "Services", href: "/services" },
                { label: "Product", href: "/product" },
                { label: "page", href: "/" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.05rem",
                      cursor: "pointer",
                      transition: "0.3s",
                      "&:hover": { color: "white" },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </Stack>

            {/* Get Quote Button (hidden on small screens) */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link href={"/getQuote"}>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    background: "linear-gradient(to right, #03045E, #023E8A)",
                  }}
                  variant="contained"
                >
                  Get Quote
                  <ArrowForwardIcon sx={{ ml: 1 }} />
                </Button>
              </Link>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, color: "#023E8A" }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Stack spacing={3} sx={{ width: 250, p: 3 }}>
          {[
            { label: "Home", href: "/" },
            { label: "Company", href: "/company" },
            { label: "Services", href: "/services" },
            { label: "Product", href: "/product" },
            { label: "page", href: "/" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  "&:hover": { color: "#023E8A" },
                }}
              >
                {item.label}
              </Typography>
            </Link>
          ))}

          {/* Mobile Get Quote */}
          <Link href={"/getQuote"}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
                background: "linear-gradient(to right, #03045E, #023E8A)",
              }}
            >
              Get Quote <ArrowForwardIcon sx={{ ml: 1 }} />
            </Button>
          </Link>
        </Stack>
      </Drawer>
    </Box>
  );
};
