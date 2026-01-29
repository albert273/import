"use client";
import TitleDash from "@/components/dashboard/titlePages/TitleDash";
import RequestsCard from "@/components/dashboard/quoteCard/RequestsCard";
import { fetchGuestQuoteData } from "@/redux/slice/quotes";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import QuoteDetailsDialog from "@/components/dashboard/quoteDetails/QuoteDetailsDialog";

const page = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const guestQuotes = useSelector((state) => state.Quotes.Quote);
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState(null);

  const handleShowDetails = (quote) => {
    setSelectedQuote(quote);
    setOpenDetails(true);
  };


  useEffect(() => {
    dispatch(fetchGuestQuoteData());
  }, []);

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

  // Filter running and expiring quotes
  const runningQuotes = Array.isArray(guestQuotes)
    ? guestQuotes.filter(
        (quote) => !quote.status.some((status) => status.isFinished),
      )
    : [];

  const expiringQuotes = Array.isArray(guestQuotes)
    ? guestQuotes.filter((quote) =>
        quote.status.some((status) => status.isFinished),
      )
    : [];
  return (
    <Box>
      <TitleDash title={"Guest Quotes"} subTitle={"Guest Quotes only"} />

      {/* Running Quotes */}
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#03045E",
          fontSize: "1.2rem",
          mb: "30px",
        }}
      >
        Quotes in Progress
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          justifyItems: "center",
          alignItems: "center",
          gap: 2,
          pb: "40px",
        }}
      >
{runningQuotes.map((item) => (
  <RequestsCard
    key={item.id}
    {...item}
    createdAt={new Date(item.createdAt).toLocaleDateString()}
    finishedAt={"N/A"}
    onShowDetails={() => handleShowDetails(item)}
  />
))}

      </Box>

      {/* Expiring Quotes */}
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#03045E",
          fontSize: "1.2rem",
          mb: "30px",
        }}
      >
        Finished Quotes
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          justifyItems: "center",
          alignItems: "center",
          gap: 2,
          pb: "40px",
        }}
      >
{expiringQuotes.map((item) => {
  const finishedAt = item.status.find(
    (status) => status.isFinished,
  )?.finishedAt;

  return (
    <RequestsCard
      key={item.id}
      {...item}
      createdAt={new Date(item.createdAt).toLocaleDateString()}
      finishedAt={
        finishedAt ? new Date(finishedAt).toLocaleDateString() : "N/A"
      }
      onShowDetails={() => handleShowDetails(item)}
    />
  );
})}

      </Box>
      <QuoteDetailsDialog
  open={openDetails}
  onClose={() => setOpenDetails(false)}
  quote={selectedQuote}
/>
    </Box>
  );
};

export default page;
