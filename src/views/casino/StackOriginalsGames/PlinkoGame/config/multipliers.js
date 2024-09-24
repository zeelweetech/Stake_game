export const multipliers = {
  110: {
    label: "block-110",
  },
  88: {
    label: "block-88",
  },
  58: {
    label: "block-58",
  },
  43: {
    label: "block-43",
  },
  41: {
    label: "block-41",
  },
  33: {
    label: "block-33",
  },
  25: {
    label: "block-25",
  },
  24: {
    label: "block-24",
  },
  22: {
    label: "block-22",
  },
  18: {
    label: "block-18",
  },
  15: {
    label: "block-15",
  },
  13: {
    label: "block-13",
  },
  11: {
    label: "block-11",
  },
  10: {
    label: "block-10",
  },
  7: {
    label: "block-7",
  },
  6: {
    label: "block-6",
  },
  5: {
    label: "block-5",
  },
  4: {
    label: "block-4",
  },
  3: {
    label: "block-3",
  },
  2: {
    label: "block-2",
  },
  1.9: {
    label: "block-1.9",
  },
  1.8: {
    label: "block-1.8",
  },
  1.7: {
    label: "block-1.7",
  },
  1.5: {
    label: "block-1.5",
  },
  1.4: {
    label: "block-1.4",
  },
  1.3: {
    label: "block-1.3",
  },
  1.1: {
    label: "block-1.1",
  },
  1: {
    label: "block-1",
  },
  0.9: {
    label: "block-0.9",
  },
  0.7: {
    label: "block-0.7",
  },
  0.6: {
    label: "block-0.6",
  },
  0.5: {
    label: "block-0.5",
  },
  0.4: {
    label: "block-0.4",
  },
  0.3: {
    label: "block-0.3",
  },
  0.2: {
    label: "block-0.2",
  },
};

export function getMultiplier(value) {
  return multipliers[value];
}

export const multiplyBlocks16Lines = [
  getMultiplier(110),
  getMultiplier(41),
  getMultiplier(10),
  getMultiplier(5),
  getMultiplier(3),
  getMultiplier(1.5),
  getMultiplier(1),
  getMultiplier(0.5),
  getMultiplier(0.3),
  getMultiplier(0.5),
  getMultiplier(1),
  getMultiplier(1.5),
  getMultiplier(3),
  getMultiplier(5),
  getMultiplier(10),
  getMultiplier(41),
  getMultiplier(110),
];

export const multiplyBlocks15Lines = [
  getMultiplier(88),
  getMultiplier(18),
  getMultiplier(11),
  getMultiplier(5),
  getMultiplier(3),
  getMultiplier(1.3),
  getMultiplier(0.5),
  getMultiplier(0.3),
  getMultiplier(0.3),
  getMultiplier(0.5),
  getMultiplier(1.3),
  getMultiplier(3),
  getMultiplier(5),
  getMultiplier(11),
  getMultiplier(18),
  getMultiplier(88),
];

export const multiplyBlocks14Lines = [
  getMultiplier(58),
  getMultiplier(15),
  getMultiplier(7),
  getMultiplier(4),
  getMultiplier(1.9),
  getMultiplier(1),
  getMultiplier(0.5),
  getMultiplier(0.2),
  getMultiplier(0.5),
  getMultiplier(1),
  getMultiplier(1.9),
  getMultiplier(4),
  getMultiplier(7),
  getMultiplier(15),
  getMultiplier(58),
];

export const multiplyBlocks13Lines = [
  getMultiplier(43),
  getMultiplier(13),
  getMultiplier(6),
  getMultiplier(3),
  getMultiplier(1.3),
  getMultiplier(0.7),
  getMultiplier(0.4),
  getMultiplier(0.4),
  getMultiplier(0.7),
  getMultiplier(1.3),
  getMultiplier(3),
  getMultiplier(6),
  getMultiplier(13),
  getMultiplier(43),
];

export const multiplyBlocks12Lines = [
  getMultiplier(33),
  getMultiplier(11),
  getMultiplier(4),
  getMultiplier(2),
  getMultiplier(1.1),
  getMultiplier(0.6),
  getMultiplier(0.3),
  getMultiplier(0.6),
  getMultiplier(1.1),
  getMultiplier(2),
  getMultiplier(4),
  getMultiplier(11),
  getMultiplier(33),
];

export const multiplyBlocks11Lines = [
  getMultiplier(24),
  getMultiplier(6),
  getMultiplier(3),
  getMultiplier(1.8),
  getMultiplier(0.7),
  getMultiplier(0.5),
  getMultiplier(0.5),
  getMultiplier(0.7),
  getMultiplier(1.8),
  getMultiplier(3),
  getMultiplier(6),
  getMultiplier(24),
];

export const multiplyBlocks10Lines = [
  getMultiplier(22),
  getMultiplier(5),
  getMultiplier(2),
  getMultiplier(1.4),
  getMultiplier(0.6),
  getMultiplier(0.3),
  getMultiplier(0.6),
  getMultiplier(1.4),
  getMultiplier(2),
  getMultiplier(5),
  getMultiplier(22),
];

export const multiplyBlocks9Lines = [
  getMultiplier(18),
  getMultiplier(4),
  getMultiplier(1.7),
  getMultiplier(0.9),
  getMultiplier(0.5),
  getMultiplier(0.5),
  getMultiplier(0.9),
  getMultiplier(1.7),
  getMultiplier(4),
  getMultiplier(18),
];

export const multiplyBlocks8Lines = [
  getMultiplier(13),
  getMultiplier(3),
  getMultiplier(1.3),
  getMultiplier(0.7),
  getMultiplier(0.4),
  getMultiplier(0.7),
  getMultiplier(1.3),
  getMultiplier(3),
  getMultiplier(13),
];

export const multiplyBlocksByLinesQnt = {
  8: multiplyBlocks8Lines,
  9: multiplyBlocks9Lines,
  10: multiplyBlocks10Lines,
  11: multiplyBlocks11Lines,
  12: multiplyBlocks12Lines,
  13: multiplyBlocks13Lines,
  14: multiplyBlocks14Lines,
  15: multiplyBlocks15Lines,
  16: multiplyBlocks16Lines,
};

export function getMultiplierByLinesQnt(value) {
  return multiplyBlocksByLinesQnt[value];
}
