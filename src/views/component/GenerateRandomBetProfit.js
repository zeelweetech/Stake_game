import {
  RiMoneyRupeeCircleFill,
  RiMoneyDollarCircleFill,
  RiMoneyPoundCircleFill,
  RiMoneyCnyCircleFill,
} from "react-icons/ri";
import { getRandomNumber } from "../../resources/utility";

const currencyIcons = [
  { icon: <RiMoneyRupeeCircleFill color="yellow" />, currency: "₹" },
];

export const generateRandomBetProfit = () => {
  const randomData = [];

  for (let i = 0; i < 30; i++) {
    const totalxValue =
      Math.random() > 0.2 ? `${(Math.random() * 10).toFixed(2)}x` : "-"; // 80% chance to generate a random multiplier, 20% to get '-'
    const randomMoney = `${getRandomNumber(0, 100000).toFixed(2)}`; // Money capped at ₹100,000

    // Randomly select a currency icon from the array
    const randomCurrencyIcon =
      currencyIcons[getRandomNumber(0, currencyIcons.length - 1)];

    randomData.push({
      Totalx: totalxValue,
      CurrenciesMoneyIcon: randomCurrencyIcon.icon,
      Money: randomMoney,
    });
  }

  return randomData;
};
