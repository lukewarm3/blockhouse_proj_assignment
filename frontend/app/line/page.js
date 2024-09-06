"use client";

import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { CircularProgress, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchLineData } from "@/slices/ChartSlice";

const Line = () => {
  const dispatch = useDispatch()
  const lineData = useSelector(state => state.chart.lineData)

  useEffect(() => {
    if (lineData.status == 'idle') {
      dispatch(fetchLineData())
    }
  }, [lineData.status, dispatch]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
      }}
    >
      {lineData.state === 'loading' || lineData.status === 'idle' ? (
        <CircularProgress />
      ) : (
        <Chart
          chartType="Line"
          width="100%"
          height="400px"
          data={lineData.data}
        />
      )}
    </Box>
  );
};

export default Line;