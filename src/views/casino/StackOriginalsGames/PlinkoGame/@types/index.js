export const LinesType = 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;

export const MultiplierColors = {
  RED_DARKER: "#ff003f",
  RED_DARK: "#ff1837",
  RED: "#ff302f",
  ORANGE_DARK: "#ff4827",
  ORANGE: "#ff6020",
  ORANGE_LIGHT: "#ff7818",
  YELLOW_DARK: "#ff9010",
  YELLOW: "#ffa818",
  YELLOW_LIGHT: "#ffc000",
};

export const MultiplierValues = [
  110, 88, 41, 33, 25, 18, 15, 10, 5, 3, 2, 1.5, 1, 0.5, 0.3,
];

// In JavaScript, you can represent the labels dynamically using a function
export function getMultiplierLabel(value) {
  return `block-$${value}`;
}

// Example of a multiplier object
export function createMultiplier(value, img) {
  return {
    label: getMultiplierLabel(value),
    img: img, // You can pass an image URL or a path here
  };
}
