import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  candleData: { status: "idle", data: [] },
  lineData: { status: "idle", data: [] },
  barData: { status: "idle", data: [] },
  pieData: { status: "idle", data: [] },
};

export const fetchCandleStickData = createAsyncThunk(
  "chart/fetchCandleStickData",
  async (args, { getState }) => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/candlestick-data/"
    );
    const data = response.data.data;
    const new_data = [
      ["Day", "Low", "Open", "Close", "High"],
      ...data.map((d) => [d.x, d.low, d.open, d.close, d.high]),
    ];

    return new_data;
  }
);

export const fetchLineData = createAsyncThunk(
  "chart/fetchLineData",
  async (args, { getState }) => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/line-chart-data/"
    );
    const data = response.data.data;
    const new_data = [
      ["Month", "Value"],
      ...data.labels.map((label, index) => [label, data.data[index]]),
    ];
    return new_data;
  }
);

export const fetchBarData = createAsyncThunk(
  "chart/fetchBarData",
  async (args, { getState }) => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/bar-chart-data/"
    );
    const data = response.data.data;
    const new_data = [
      ["Color", "Amount"],
      ...data.labels.map((label, index) => [label, data.data[index]]),
    ];

    return new_data;
  }
);

export const fetchPieStickData = createAsyncThunk(
  "chart/fetchPieData",
  async (args, { getState }) => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/pie-chart-data/"
    );
    const data = response.data.data;
    const new_data = [
      ["Product", "Sale"],
      ...data.labels.map((label, index) => [label, data.data[index]]),
    ];

    return new_data;
  }
);

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCandleStickData.pending, (state) => {
        state.candleData.status = "loading";
      })
      .addCase(fetchCandleStickData.fulfilled, (state, action) => {
        state.candleData.status = "succeeded";
        state.candleData.data = action.payload;
      })
      .addCase(fetchCandleStickData.rejected, (state) => {
        state.candleData.status = "failed";
      })
      .addCase(fetchLineData.pending, (state) => {
        state.lineData.status = "loading";
      })
      .addCase(fetchLineData.fulfilled, (state, action) => {
        state.lineData.status = "succeeded";
        state.lineData.data = action.payload;
      })
      .addCase(fetchLineData.rejected, (state) => {
        state.lineData.status = "failed";
      })
      .addCase(fetchBarData.pending, (state) => {
        state.barData.status = "loading";
      })
      .addCase(fetchBarData.fulfilled, (state, action) => {
        state.barData.status = "succeeded";
        state.barData.data = action.payload;
      })
      .addCase(fetchBarData.rejected, (state) => {
        state.barData.status = "failed";
      })
      .addCase(fetchPieStickData.pending, (state) => {
        state.pieData.status = "loading";
      })
      .addCase(fetchPieStickData.fulfilled, (state, action) => {
        state.pieData.status = "succeeded";
        state.pieData.data = action.payload;
      })
      .addCase(fetchPieStickData.rejected, (state) => {
        state.pieData.status = "failed";
      });
  },
});

export const {} = chartSlice.actions;

export default chartSlice.reducer;
