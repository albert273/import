// MessageSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "cookie-universal";

export const fetchGuestQuoteData = createAsyncThunk(
  "QuoteSlice/fetchGuestQuoteData",
  async () => {
    const cookies = cookie();
    const token = cookies.get("token");
    try {
      const response = await axios.get(
        "http://unicargoapis.somee.com/api/Quote/GetAllQuotes",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

export const deleteQuote = createAsyncThunk(
  "fetchQuoteById/deleteQuote",
  async (id) => {
    const cookies = cookie();
    const token = cookies.get("token");
    try {
      const response = await axios.delete(
        `http://unicargoapis.somee.com/api/Quote/Activate/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status === 201 || response.status === 200) {
        window.location.pathname = "/dashboard/GuestQuote";
      }
    } catch (err) {
      console.log("Error:", err);
    }
  },
);

export const fetchQuoteById = createAsyncThunk(
  "QuoteSlice/fetchQuoteById",
  async (id) => {
    const cookies = cookie();
    const token = cookies.get("token");
    try {
      const response = await axios.get(
        `https://back-uni-cargo-jwdf.vercel.app/api/quote/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data.data;
    } catch (err) {
      console.log("Error:", err);
    }
  },
);

export const finishQuote = createAsyncThunk(
  "fetchQuoteById/FinishQuote",
  async (id) => {
    const cookies = cookie();
    const token = cookies.get("token");
    try {
      const response = await axios.patch(
        `http://unicargoapis.somee.com/api/Quote/Activate/${id}`,
        {}, // Payload goes here if needed
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status === 201 || response.status === 200) {
        window.location.reload();
      }
    } catch (err) {
      console.log("Error:", err);
    }
  },
);

export const QuoteSlice = createSlice({
  name: "QuoteData",
  initialState: { Quote: [] }, // Initial state with 'message' array
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGuestQuoteData.fulfilled, (state, action) => {
      state.Quote = action.payload; // Ensure data is stored in 'message'
    });
    builder.addCase(fetchQuoteById.fulfilled, (state, action) => {
      state.Quote = action.payload || {};
    });
    builder.addCase(deleteQuote.fulfilled, (state, action) => {
      state.Quote = state.Quote.filter(
        (officer) => officer._id !== action.payload,
      );
    });
    builder.addCase(finishQuote.fulfilled, (state, action) => {
      state.Quote = state.Quote;
    });
  },
});
export const {} = QuoteSlice.actions;

export default QuoteSlice.reducer;
