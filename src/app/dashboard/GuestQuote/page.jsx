"use client";
import TitleDash from "@/components/dashboard/titlePages/TitleDash";
import RequestsCard from "@/components/dashboard/quoteCard/RequestsCard";
import { fetchGuestQuoteData } from "@/redux/slice/quotes";
import { Box, Typography, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuoteDetailsDialog from "@/components/dashboard/quoteDetails/QuoteDetailsDialog";

const Page = () => {
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
  }, [dispatch]);

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

  // ✅ تقسيم البيانات حسب isActive
  const inactiveQuotes = Array.isArray(guestQuotes)
    ? guestQuotes.filter((quote) => quote.isActive === true)
    : [];

  const runningQuotes = Array.isArray(guestQuotes)
    ? guestQuotes.filter((quote) => quote.isActive === false)
    : [];

  return (
    <Box>
      <TitleDash title={"Guest Quotes"} subTitle={"Guest Quotes only"} />

      {/* Active Quotes */}
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
            createdAt={
              item.createdAt
                ? new Date(item.createdAt).toLocaleDateString()
                : "N/A"
            }
            finishedAt={"N/A"}
            onShowDetails={() => handleShowDetails(item)}
          />
        ))}
      </Box>

      {/* Inactive Quotes */}
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#03045E",
          fontSize: "1.2rem",
          mb: "30px",
        }}
      >
        Inactive Quotes
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
        {inactiveQuotes.map((item) => (
          <RequestsCard
            key={item.id}
            {...item}
            createdAt={
              item.createdAt
                ? new Date(item.createdAt).toLocaleDateString()
                : "N/A"
            }
            finishedAt={"N/A"}
            onShowDetails={() => handleShowDetails(item)}
          />
        ))}
      </Box>

      <QuoteDetailsDialog
        open={openDetails}
        onClose={() => setOpenDetails(false)}
        quote={selectedQuote}
      />
    </Box>
  );
};

export default Page;