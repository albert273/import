import {
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

export default function RequestsCard({
  name,
  email,
  phoneNumber,
  createdAt,
  id,
  status,
  finishedAt,
  onShowDetails
}) {

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "450px",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        padding: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Request from{" "}
          <span style={{ color: "#03045E", fontWeight: "bold" }}>{name}</span>
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Stack spacing={1.5}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" color="textSecondary">
              Email:
            </Typography>
            <Typography variant="body1">{email}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" color="textSecondary">
              Phone:
            </Typography>
            <Typography variant="body1">{phoneNumber}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" color="textSecondary">
              Requested on:
            </Typography>
            <Typography variant="body1">
              {new Date(createdAt).toLocaleDateString()}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >

<Button
  variant="contained"
  onClick={onShowDetails}
  sx={{
    textTransform: "capitalize",
    backgroundColor: "#03045E",
    padding: { xs: "8px 12px", sm: "10px 16px" },
    fontWeight: "bold",
    fontSize: "16px",
    "&:hover": { backgroundColor: "#00229dff" },
  }}
>
  show details
</Button>
        {status?.length === 0 ? (
          <Typography sx={{ color: "#03045E", fontSize: "1.2rem" }}>
            In progress
          </Typography>
        ) : (
          <Stack alignItems={"center"}>
            <Typography sx={{ color: "#03045E", fontSize: "1.2rem" }}>
              Finished
            </Typography>
            <Typography sx={{ color: "#00000" }}>
              {new Date(finishedAt).toLocaleDateString()}
            </Typography>
          </Stack>
        )}
      </Stack>
    </Card>
  );
}
