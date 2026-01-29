"use client";
import { Box, Stack, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WidgetsSharpIcon from "@mui/icons-material/WidgetsSharp";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadOffice } from "@/redux/slice/HeadOfficeSlice";
import { useEffect } from "react";

const QuickInformation = () => {
    const messages = useSelector((state) => state.MessageData.messages);
  const guestQuotes = useSelector((state) => state.Quotes.Quote);
    const headOffice = useSelector((state) => state.HeadOfficer.headOfficer);
      const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHeadOffice());
  }, []);


  return (
    <Stack
      sx={{ flexDirection: { xs: "column", md: "row" } }}
      justifyContent={"space-around"}
      gap={2}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "30%" },
          height: "200px",
          color: "white",
          backgroundColor: "#303f9f",
          borderRadius: "15px",
          padding: "20px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "350px",
            height: "350px",
            bgcolor: "#ffffff1f",
            zIndex: "1",
            borderRadius: "50%",
            position: "absolute",
            top: "-180px",
            left: "240px",
          }}
        ></Box>
        <Box
          sx={{
            width: "250px",
            height: "250px",
            bgcolor: "#ffffff3f",
            zIndex: "1",
            borderRadius: "50%",
            position: "absolute",
            top: "-180px",
            left: "80px",
          }}
        />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ marginY: "20px" }}
        >
          <AccountCircleIcon
            color="white"
            sx={{
              fontSize: "2.3rem",
              padding: "8px",
              backgroundColor: "#00000034",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />
        </Stack>

        <Stack>
          <Typography
            sx={{ color: "white", fontSize: "2.5rem", fontWeight: "bold" }}
          >
            ?????????????????
          </Typography>
          <Typography
            sx={{ color: "#bdbdbd", fontSize: "1.3rem", fontWeight: "bold" }}
          >
            Clients
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          width: { xs: "90%", md: "30%" },
          height: "200px",
          color: "white",
          backgroundColor: "#03045E",
          borderRadius: "15px",
          padding: "20px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "350px",
            height: "350px",
            bgcolor: "#ffffff1f",
            zIndex: "1",
            borderRadius: "50%",
            position: "absolute",
            top: "-180px",
            left: "240px",
          }}
        ></Box>
        <Box
          sx={{
            width: "250px",
            height: "250px",
            bgcolor: "#ffffff3f",
            zIndex: "1",
            borderRadius: "50%",
            position: "absolute",
            top: "-180px",
            left: "80px",
          }}
        />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ marginY: "20px" }}
        >
          <WidgetsSharpIcon
            color="white"
            sx={{
              fontSize: "2.3rem",
              padding: "8px",
              backgroundColor: "#00000034",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />
        </Stack>
        <Stack>
          <Typography
            sx={{ color: "white", fontSize: "2.5rem", fontWeight: "bold" }}
          >
            {guestQuotes.length}
          </Typography>
          <Typography
            sx={{ color: "#bdbdbd", fontSize: "1.3rem", fontWeight: "bold" }}
          >
            Total Quote
          </Typography>
        </Stack>
      </Box>
      <Stack
        justifyContent={"space-between"}
        gap={1}
        sx={{
          width: { xs: "98%", md: "30%" },
          flexDirection: { xs: "row", md: "column" },
        }}
      >
        <Box
          sx={{
            width: "92%",
            height: "100px",
            color: "white",
            backgroundColor: "#303f9f",
            borderRadius: "15px",
            padding: "20px",
            overflow: "hidden",
            position: "relative",
            marginRight: "20px",
          }}
        >
          <Box
            sx={{
              width: "250px",
              height: "250px",
              bgcolor: "#ffffff1f",
              zIndex: "1",
              borderRadius: "50%",
              position: "absolute",
              top: "-175px",
              left: "300px",
            }}
          ></Box>
          <Box
            sx={{
              width: "250px",
              height: "250px",
              bgcolor: "#ffffff3f",
              zIndex: "1",
              borderRadius: "50%",
              position: "absolute",
              top: "60px",
              left: "300px",
            }}
          />
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ marginY: "auto" }}
          >
            <QuestionAnswerIcon
              color="white"
              sx={{
                fontSize: "2.3rem",
                padding: "8px",
                backgroundColor: "#00000034",
                borderRadius: "10px",
                marginRight: "20px",
                cursor: "pointer",
              }}
            />
            <Stack>
              <Typography
                sx={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
              >
                {messages.length}
              </Typography>
              <Typography sx={{ color: "#bdbdbd", fontWeight: "bold" }}>
                Number of Message
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "92%",
            height: "100px",
            backgroundColor: "#03045E",
            borderRadius: "15px",
            padding: "20px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "250px",
              height: "250px",
              bgcolor: "#ffffff2f",
              zIndex: "1",
              borderRadius: "50%",
              position: "absolute",
              top: "-175px",
              left: "300px",
              opacity: "80%",
            }}
          ></Box>
          <Box
            sx={{
              width: "250px",
              height: "250px",
              bgcolor: "#ffffff3f",
              zIndex: "1",
              borderRadius: "50%",
              position: "absolute",
              top: "60px",
              left: "300px",
            }}
          />
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ marginY: "auto" }}
          >
            <CreditCardIcon
              color="white"
              sx={{
                fontSize: "2.3rem",
                padding: "8px",
                backgroundColor: "#00000034",
                borderRadius: "10px",
                marginRight: "20px",
                cursor: "pointer",
                color: "white",
              }}
            />
            <Stack>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                {headOffice.length}
              </Typography>
              <Typography sx={{ color: "#bdbdbd", fontWeight: "bold" }}>
                Number of Head Officer
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default QuickInformation;
