// store.js
import { configureStore } from "@reduxjs/toolkit";
import messageDataSlice from "./slice/MessageSlice";
import headOfficeDataSlice from "./slice/HeadOfficeSlice";
import  QuoteSlice  from "./slice/quotes";

export const makeStore = () => {
  return configureStore({
    reducer: {
    MessageData: messageDataSlice,
    HeadOfficer: headOfficeDataSlice,
    Quotes: QuoteSlice
    }
  })
}
