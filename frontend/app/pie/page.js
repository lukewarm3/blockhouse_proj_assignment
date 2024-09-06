"use client";

import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { CircularProgress, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchPieStickData } from "@/slices/ChartSlice";

const Pie = () => {
  const dispatch = useDispatch();
  const pieData = useSelector((state) => state.chart.pieData);

  useEffect(() => {
    if (pieData.status == "idle") {
      dispatch(fetchPieStickData());
    }
  }, [pieData.status, dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
      }}
    >
      {pieData.status === "loading" || pieData.status === 'idle'? (
        <CircularProgress />
      ) : (
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={pieData.data}
        />
      )}
    </Box>
  );
};

export default Pie;
