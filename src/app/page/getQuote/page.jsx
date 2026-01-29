"use client";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import cookie from "cookie-universal";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const cookies = cookie();

  const onSubmit = async (data) => {
    const role = cookies.get("role");
    handleClick();
    try {
      let res;
      res = await axios.post(
        "https://back-uni-cargo-jwdf.vercel.app/api/quote/guest",
        data,
      );
      if (res.status === 201 || res.status === 200) {
        window.location.reload();
      }
    } catch (err) {
      if (
        err.response &&
        err.response.data &&
        Array.isArray(err.response.data.errors)
      ) {
        setErrorMsg(err.response.data.errors[0].msg);
      } else {
        setErrorMsg("An error occurred. Please try again.");
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "#03045E" }} />
      </Box>
    );

  return (
    <Box sx={{ mt: "140px", mb: "100px" }}>
      {/* Title */}
      <Stack alignItems="center" spacing={2} mb={6}>
        <Typography
          sx={{
            fontSize: { xs: "2.2rem", md: "3.2rem" },
            fontWeight: "bold",
            color: "#03045E",
          }}
        >
          Get a Quote
        </Typography>

        <Typography
          sx={{
            maxWidth: "700px",
            textAlign: "center",
            color: "#555",
            fontSize: "1rem",
          }}
        >
          Fill out the form below and our team will provide you with a cargo
          shipping quote.
        </Typography>
      </Stack>

      {/* Form */}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        {/* Row 1 */}
        <Stack direction={{ xs: "column", md: "row" }} gap={3}>
          <TextField
            type="text"
            id="Name"
            label="Name"
            error={Boolean(errors.name)}
            helperText={errors.name ? errors.name.message : null}
            {...register("name", {
              required: "Name is required",
              validate: {
                minLength: (value) =>
                  value.length >= 3 || "Name must be at least 3 characters",
                isNotNumber: (value) =>
                  isNaN(value) ? true : "You must write your real name",
              },
            })}
            sx={{ flex: 1 }}
          />

          <TextField
            sx={{ flex: 1 }}
            type="email"
            id="Email"
            autoComplete="true"
            label="Email"
            error={Boolean(errors.email)}
            helperText={errors.email ? "You should enter your Email" : null}
            {...register("email", { required: true })}
          />
        </Stack>

        {/* Row 2 */}
        <Stack direction={{ xs: "column", md: "row" }} gap={3}>
          <TextField
            id="number"
            label="Number"
            error={Boolean(errors.phoneNumber)}
            helperText={
              errors.phoneNumber ? "please enter whatsApp Number" : null
            }
            {...register("phoneNumber", {
              required: true,
              pattern: phoneRegExp,
            })}
            sx={{ flex: 1 }}
          />

          <TextField
            label="Cargo Type *"
            {...register("tripType", { required: true })}
            error={Boolean(errors.cargoType)}
            sx={{ flex: 1 }}
          />
        </Stack>

        {/* Row 3 */}
        <Stack direction={{ xs: "column", md: "row" }} gap={3}>
          <TextField
            label="Weight (kg) *"
            type="number"
            {...register("weight", { required: true })}
            error={Boolean(errors.weight)}
            sx={{ flex: 1 }}
          />

          <TextField
            label="Length (cm) *"
            type="number"
            {...register("lenght", { required: true })}
            error={Boolean(errors.lenght)}
            sx={{ flex: 1 }}
          />

          <TextField
            label="Width (cm) *"
            type="number"
            {...register("width", { required: true })}
            error={Boolean(errors.width)}
            sx={{ flex: 1 }}
          />
        </Stack>

        {/* Additional Details */}
        <TextField
          label="Additional Details"
          multiline
          rows={5}
          {...register("additionalDetails")}
        />

        {/* Button */}
        <Button
          type="submit"
          sx={{
            mt: 4,
            mx: "auto",
            width: { xs: "100%", sm: "320px" },
            height: "56px",
            borderRadius: "30px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #03045E, #0077B6)",
            color: "#fff",
            boxShadow: "0px 10px 25px rgba(3,4,94,0.35)",
            textTransform: "capitalize",
          }}
        >
          Request Quote
        </Button>

        {/* Snackbar */}
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errorMsg}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default page;
