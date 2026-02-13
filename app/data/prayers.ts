import { PrayerNode } from "./types";
import { yezewetr } from "./yezewetr";
import { wedasePart1 } from "./wedase-part1";
import { wedasePart2 } from "./wedase-part2";
import { otherPrayers } from "./others";

export type { PrayerNode };

export const prayerData: PrayerNode[] = [
  yezewetr,
  {
    id: "wedase",
    title: "የዕለቱ ውዳሴ ማርያም",
    type: "category",
    children: [...wedasePart1, ...wedasePart2],
  },
  ...otherPrayers,
];
