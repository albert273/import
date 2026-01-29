"use client"; // Mark as a Client Component
import { Box, Container, Stack, Typography } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from "@mui/icons-material/Mail";
import Form from "./Form";

function Section({ handleOpen }) {
  return (
    <Box sx={{ backgroundColor: "#F8F9FA", paddingY: "100px" }}>
      <Container
        maxWidth={false}
        sx={{
          paddingTop: "50px",
          paddingBottom: "50px",
          width: { xs: "100%", md: "90%" },
          paddingX: 0,
        }}
      >
        <Stack sx={{ marginBottom: "100px" }}>
          <Box>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ textAlign: "center", marginY: "1rem" }}
            >
              Trusted by Industry Leaders
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{
                color: "#5a5d63",
                textAlign: "center",
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              Gain insights into effective warehouse management strategies that
              <br />
              maximize space, improve accuracy, and boost productivity.
            </Typography>
          </Box>
        </Stack>

        <Stack
          gap={5}
          alignItems={"center"}
          direction={{ xs: "column", lg: "row" }}
        >
          <Stack
            justifyItems={"center"}
            sx={{ width: { xs: "100%", md: "50%" } }}
          >
            <Form onFormSubmit={handleOpen} />
          </Stack>
          <Stack direction="column" gap={3}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={3}
              sx={{
                alignItems: "center",
                background: "#fff",
                padding: "24px",
                borderRadius: "7px",
                overflow: "hidden",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                transition: ".3s",
                "&:hover": { backgroundColor: "#03045E" },
                "&:hover .text": { color: "white" },
                "&:hover .icon": { color: "#03045E" },
                width: "100%",
              }}
            >
              <Box
                className="iconBox"
                sx={{
                  background: "#E7EDF6",
                  display: "block",
                  textAlign: "center",
                  borderRadius: "50px",
                  padding: "19px 20px",
                  transition: ".3s",
                }}
              >
                <AccessAlarmIcon sx={{ fontSize: "2.5rem" }} className="icon" />
              </Box>
              <Stack gap={1}>
                <Typography
                  component="h3"
                  className="text"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                    transition: ".3s",
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  className="text"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#5A5D63",
                    transition: ".3s",
                  }}
                >
                  6 Ankara street, Sheraton Heliopolis, District 4, Heliopolis,
                  Cairo, Egypt
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={3}
              sx={{
                alignItems: "center",
                background: "#fff",
                padding: "24px",
                borderRadius: "7px",
                overflow: "hidden",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                transition: ".3s",
                "&:hover": { backgroundColor: "#03045E" },
                "&:hover .text": { color: "white" },
                "&:hover .icon": { color: "#03045E" },
                width: "100%",
              }}
            >
              <Box
                className="iconBox"
                sx={{
                  background: "#E7EDF6",
                  display: "block",
                  textAlign: "center",
                  borderRadius: "50px",
                  padding: "19px 20px",
                  transition: ".3s",
                }}
              >
                <MailIcon sx={{ fontSize: "2.5rem" }} className="icon" />
              </Box>
              <Stack gap={1}>
                <Typography
                  component="h3"
                  className="text"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                    transition: ".3s",
                  }}
                >
                  Send Email
                </Typography>
                <Typography
                  className="text"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#5A5D63",
                    transition: ".3s",
                  }}
                >
                  <Box
                    component="a"
                    href="mailto:gm@uni-cargo.net"
                    sx={{
                      display: "inline",
                      fontWeight: "bold",
                      "&:hover": { color: "black" },
                    }}
                  >
                    gm@uni-cargo.net
                  </Box>
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={3}
              sx={{
                alignItems: "center",
                background: "#fff",
                padding: "24px",
                borderRadius: "7px",
                overflow: "hidden",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                transition: ".3s",
                "&:hover": { backgroundColor: "#03045E" },
                "&:hover .text": { color: "white" },
                "&:hover .icon": { color: "#03045E" },
                width: "100%",
              }}
            >
              <Box
                className="iconBox"
                sx={{
                  background: "#E7EDF6",
                  display: "block",
                  textAlign: "center",
                  borderRadius: "50px",
                  padding: "19px 20px",
                  transition: ".3s",
                }}
              >
                <PhoneInTalkIcon sx={{ fontSize: "2.5rem" }} className="icon" />
              </Box>
              <Stack gap={1}>
                <Typography
                  component="h3"
                  className="text"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                    transition: ".3s",
                  }}
                >
                  For Support
                </Typography>
                <Typography
                  className="text"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#5A5D63",
                    transition: ".3s",
                  }}
                >
                  <Stack gap={0.8} direction={{ xs: "column", md: "row" }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        cursor: "pointer",
                        "&:hover": { color: "black" },
                      }}
                    >
                      <a
                        href="tel:(+202) 22696370"
                        style={{
                          fontWeight: "bold",
                          cursor: "pointer",
                          "&:hover": { color: "black" },
                        }}
                      >
                        (+202)22696370
                      </a>
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      /
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        cursor: "pointer",
                        "&:hover": { color: "black" },
                      }}
                    >
                      <a
                        href="tel:375-(+202)26433421"
                        style={{
                          fontWeight: "bold",
                          cursor: "pointer",
                          "&:hover": { color: "black" },
                        }}
                      >
                        375-(+202)26433421
                      </a>
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      /
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        cursor: "pointer",
                        "&:hover": { color: "black" },
                      }}
                    >
                      <a href="tel:425">425</a>
                    </Typography>
                  </Stack>
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Section;
