import { RandomItem, RandomTwo } from "./types";

export const randomTwo: RandomTwo = (first, second) =>
  Math.random() > 0.5 ? first : second;

export const randomItem: RandomItem = (arr = []) =>
  arr[Math.floor(Math.random() * arr.length)];
