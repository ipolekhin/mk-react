import {GIFT_TEXT, GiftTextIntervals} from "../mock/const.js";

const getGiftText = (count) => {
  const indexProfile = GiftTextIntervals.findIndex((interval) =>
    (count >= interval.MIN && count < interval.MAX));

  return GIFT_TEXT[indexProfile];
};

const getRandomBooleanValue = () => Math.random() > 0.5;

const getRandomIntegerNumber = (min, max) => min + Math.floor(Math.random() * (max - min));

const getRandomItem = (items) => {
  const randomIndex = getRandomIntegerNumber(0, items.length);

  return items[randomIndex];
};

export {
  getGiftText,
  getRandomBooleanValue,
  getRandomIntegerNumber,
  getRandomItem,
};
