import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("getData", async () => {
  const dataGet = await axios.get("http://localhost:3000/data");
  return dataGet.data;
});

const initialState = {
  dataJson: [],
  isLoading: false,
  isError: false,
};

export const dataReducer = createSlice({
  name: "getData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataJson = action.payload;
    });

    builder.addCase(fetchData.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default dataReducer.reducer;
