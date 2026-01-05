"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import backgroundImg from "../../../public/home/ourClients/Ellipse.png";
import star from "../../../public/home/ourClients/Star1.png";
import line from "../../../public/home/ourClients/Vector.png";
import group from "../../../public/home/ourClients/Group.png";

export default function OurClients() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 8, md: 6 },
        backgroundColor: "#03045E",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND ILLUSTRATION */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 1,
        }}
      >
        <Image
          src={backgroundImg}
          alt="Stats background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>

      <Box sx={{ width: "100%", textAlign: "center", zIndex: 10 }}>
        <Stack
          sx={{
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
component="div"

            sx={{
              fontSize: { xs: "2.5rem", md: "3rem" },
              color: "white",
              fontWeight: "bold",
            }}
          >
            <Stack sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  right: -20,
                  top: { xs: -20, md: -45 },
                }}
              >
                <Image alt="star" src={star} width={20} height={20} />
              </Box>
            </Stack>
            “Our clients”
            <Stack sx={{ position: "relative", height: 20 }}>
              <Image
                alt="line"
                src={line}
                fill
                style={{ objectFit: "cover" }}
              />
            </Stack>
            <Stack sx={{ position: "relative" }}>
              <Box sx={{ position: "absolute", left: -18, bottom: -40 }}>
                <Image alt="star" src={star} width={20} height={20} />
              </Box>
            </Stack>
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          mt: "60px",
          display: "flex",
          alignItems: "center", // vertical center
          justifyContent: "center", // horizontal center
          zIndex: 10,
        }}
      >
        <Stack gap={3} className="content" sx={{}}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={2}
            sx={{ textAlign: "center" }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2.2rem", md: "3rem" },
                color: "#4DE1FF",
                fontWeight: "bold",
              }}
            >
              50+
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                color: "white",
                fontWeight: "bold",
              }}
            >
              Happy Customers
            </Typography>
          </Stack>

          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <Typography
              sx={{
                fontSize: { xs: "2.3rem", md: "3rem" },
                color: "#4DE1FF",
                fontWeight: "bold",
              }}
            >
              20+
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                color: "white",
                fontWeight: "bold",
              }}
            >
              Partners
            </Typography>
          </Stack>

          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <Typography
              sx={{
                fontSize: { xs: "2.3rem", md: "3rem" },
                color: "#4DE1FF",
                fontWeight: "bold",
              }}
            >
              10+
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                color: "white",
                fontWeight: "bold",
              }}
            >
              Collaborations
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          position: "relative",
          height: { xs: 60, sm: 80, md: 100 },
          zIndex: 10,
          overflow: "hidden",
          backgroundColor: "white",
          mt:"60px"
        }}
      >
        <Image
          src={group}
          alt="group"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}
//https://www.figma.com/design/XGCrB5gd8W4rxZ3bZB1Cn0/Import-Export-Websites-UI--Community-?node-id=2-13&t=IjuUOapgiRFfjeZz-0
