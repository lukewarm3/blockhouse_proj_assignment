"use client";

import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { CircularProgress, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchBarData } from "@/slices/ChartSlice";

const Bar = () => {
  const dispatch = useDispatch();
  const barData = useSelector((state) => state.chart.barData);

  useEffect(() => {
    if (barData.status == "idle") {
      dispatch(fetchBarData());
    }
  }, [barData.status, dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
      }}
    >
      {barData.state === "loading" || barData.status === 'idle'? (
        <CircularProgress />
      ) : (
        <Chart chartType="Bar" width="100%" height="400px" data={barData.data} />
      )}
    </Box>
  );
};

export default Bar;
