import { useSelector } from "react-redux";
import {
  HEIGHT,
  NUM_SINKS,
  WIDTH,
  obstacleRadius,
  sinkWidth,
} from "./constants";
import { pad } from "./padding";
import { RowByRisk, RowData } from "../RowXButton";

const getCall = (values) => {
  console.log('values ++++++++++++++++', values);
  const selectionByRisk = RowByRisk[values?.risk];
  const selectionByRow = selectionByRisk[`row${values?.rows}`];
  const multiplier = selectionByRow.map((el) => el.xValue);
  return multiplier;
};

export const createObstacles = (values) => {
  const selectedOption = RowData[`row${values?.rows}`];
  const obstacles = [];
  const rows = selectedOption?.rows;

  for (let row = 2; row < rows; row++) {
    const numObstacles = row + 1;
    const y = selectedOption.plusNumber + row * 35;
    const spacing = 36;
    for (let col = 0; col < numObstacles; col++) {
      const x = WIDTH / 2 - spacing * (row / 2 - col);
      obstacles.push({ x: pad(x), y: pad(y), radius: obstacleRadius });
    }
  }
  return obstacles;
};

export const createSinks = (values) => {
  const selectedOption = RowData[`row${values?.rows}`];
  const NUM_SINKS = selectedOption?.sinksNumber;
  const sinks = [];
  const SPACING = obstacleRadius * selectedOption?.multiply;
  const MULTIPLIERS = getCall(values);

  for (let i = 0; i < NUM_SINKS; i++) {
    const x =
      WIDTH / 2 + sinkWidth * (i - Math.floor(NUM_SINKS / 2)) - SPACING * 1.5;
    const y = HEIGHT - selectedOption.minusHeight;
    const width = sinkWidth;
    const height = width;
    sinks.push({ x, y, width, height, multiplier: MULTIPLIERS[i] });
  }

  return sinks;
};
