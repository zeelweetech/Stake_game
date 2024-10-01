import { useDispatch } from "react-redux";
import { setCompleteBetStatus } from "../../../../../../features/casino/plinkoSlice";
import {
  HEIGHT,
  WIDTH,
  ballRadius,
  obstacleRadius,
  sinkWidth,
} from "../constants";
import { createObstacles, createSinks } from "../objects";
import { pad, unpad } from "../padding";
import Ball from "./Ball";
export default class BallManager {
  balls;
  canvasRef;
  ctx;
  obstacles;
  sinks;
  requestId;
  onFinish;
  selectedValues;
  dispatch;
  constructor(canvasRef, selectedValues, dispatch, onFinish) {
    this.balls = [];
    this.canvasRef = canvasRef;
    this.selectedValues = selectedValues;
    this.ctx = this.canvasRef.getContext("2d");
    this.obstacles = createObstacles(this.selectedValues);
    this.sinks = createSinks(this.selectedValues);
    this.update();
    this.onFinish = onFinish;
    this.dispatch = dispatch;
  }

  addBall(startX) {
    console.log("startX", startX?.point, startX?.multiplier);

    const newBall = new Ball(
      startX?.point || pad(WIDTH / 2 + 13),
      pad(50),
      ballRadius,
      "red",
      this.ctx,
      this.obstacles,
      this.sinks,
      (index) => {
        this.balls = this.balls.filter((ball) => ball !== newBall);
        this.onFinish?.(index, startX?.point);
        this.dispatch(setCompleteBetStatus(false));
        const data = this.sinks?.find((item) => {
          return item?.multiplier === startX?.multiplier;
        });
        console.log("^^^^^^^^^", data);
      }
    );
    this.balls.push(newBall);
  }

  drawObstacles() {
    this.ctx.fillStyle = "white";
    this.obstacles.forEach((obstacle) => {
      this.ctx.beginPath();
      this.ctx.arc(
        unpad(obstacle.x),
        unpad(obstacle.y),
        obstacle.radius,
        0,
        Math.PI * 2
      );
      this.ctx.fill();
      this.ctx.closePath();
    });
  }

  getColor(index) {
    if (index < 3 || index > this.sinks.length - 3) {
      return { background: "#ff003f", color: "white" };
    }
    if (index < 6 || index > this.sinks.length - 6) {
      return { background: "#ff7f00", color: "white" };
    }
    if (index < 9 || index > this.sinks.length - 9) {
      return { background: "#ffbf00", color: "black" };
    }
    if (index < 12 || index > this.sinks.length - 12) {
      return { background: "#ffff00", color: "black" };
    }
    if (index < 15 || index > this.sinks.length - 15) {
      return { background: "#bfff00", color: "black" };
    }
    return { background: "#7fff00", color: "black" };
  }
  drawSinks() {
    this.ctx.fillStyle = "green";
    const SPACING = obstacleRadius * 2;
    for (let i = 0; i < this.sinks.length; i++) {
      this.ctx.fillStyle = this.getColor(i).background;
      const sink = this.sinks[i];
      this.ctx.font = "normal 11px Arial";
      this.ctx.fillRect(
        sink.x,
        sink.y - sink.height / 2,
        sink.width - SPACING,
        sink.height
      );
      this.ctx.fillStyle = this.getColor(i).color;
      this.ctx.fillText(
        sink?.multiplier?.toString() + "x",
        sink.x - 15 + sinkWidth / 2,
        sink.y
      );
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, WIDTH, HEIGHT);
    this.drawObstacles();
    this.drawSinks();
    this.balls.forEach((ball) => {
      ball.draw();
      ball.update();
    });
  }

  update() {
    this.draw();
    this.requestId = requestAnimationFrame(this.update.bind(this));
  }

  stop() {
    if (this.requestId) {
      cancelAnimationFrame(this.requestId);
    }
  }
}
