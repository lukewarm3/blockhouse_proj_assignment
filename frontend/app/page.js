"use client";

import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { CircularProgress, Box } from "@mui/material";
import { fetchCandleStickData } from "@/slices/ChartSlice";
import { useDispatch, useSelector } from "react-redux";

const options = {
  legend: "none",
  bar: { groupWidth: "80%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  },
};

export default function Home() {
  const dispatch = useDispatch()
  const candleData = useSelector(state => state.chart.candleData)

  useEffect(() => {
    if (candleData.status == 'idle') {
      dispatch(fetchCandleStickData())
    }
  }, [candleData.status, dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
      }}
    >
      {candleData.status === 'loading' || candleData.status === 'idle' ? (
        <CircularProgress />
      ) : (
        <Chart
          chartType="CandlestickChart"
          width="100%"
          height="400px"
          data={candleData.data}
          options={options}
        />
      )}
    </Box>
  );
}
