import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { states } from "../constants/Constants";
const StateBarChart = () => {
  const [incidents, setReport] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/incidents/get-incidents")
      .then((response) => {
        setReport(response.data);
      });
  }, []);
  //console.log(incidents);

  const [stateCounts, setStateCounts] = useState({});

  useEffect(() => {
    const calculateStateCounts = () => {
      const counts = {};

      incidents.forEach((incident) => {
        const incidentDate = new Date(incident.date);
        const yearMonth = `${incidentDate.getFullYear()}-${(
          incidentDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}`;

        if (!counts[yearMonth]) {
          counts[yearMonth] = {};
        }

        if (!counts[yearMonth][incident.State]) {
          counts[yearMonth][incident.State] = 1;
        } else {
          counts[yearMonth][incident.State]++;
        }
      });

      setStateCounts(counts);
    };

    calculateStateCounts();
  }, [incidents]);
  console.log(stateCounts);

  // Transform the counts into the desired format
  const resultArray = Object.entries(stateCounts).map(([months, State]) => {
    const result = { months };
    Object.entries(State).forEach(([state, count]) => {
      result[state] = count;
    });
    return result;
  });
  console.log(resultArray);

  // Function to generate a random color for different states
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF"; //creating a string containing these characters
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <ResponsiveContainer width="100%" minWidth={300} minHeight={500}>
      <BarChart data={resultArray}>
        <CartesianGrid />
        <XAxis dataKey="months" />
        <YAxis />
        <Tooltip />
        <Legend />
        {states.map((c) => (
          <Bar key={c} dataKey={c} stackId="a" fill={getRandomColor()} /> //dynamic bar color
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StateBarChart;
