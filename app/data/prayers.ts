import { PrayerNode } from "./types";
import { yezewetr } from "./yezewetr";
import { wedasePart1 } from "./wedase-part1";
import { monday } from "./ውዳሴ ማርያም/ዘሰኑይ";
import { tuesday } from "./ውዳሴ ማርያም/ዘሠሉስ";
import { wednesday } from "./ውዳሴ ማርያም/ዘረቡዕ";
import { thursday } from "./ውዳሴ ማርያም/ዘሐሙስ";
import { friday } from "./ውዳሴ ማርያም/ዘዓርብ";
import { saturday } from "./ውዳሴ ማርያም/ዘቀዳሚት ሰንበት";
import { sunday } from "./ውዳሴ ማርያም/ዘሰንበተ ክርስቲያን ቅድስት";
import { otherPrayers } from "./others";

export type { PrayerNode };

export const prayerData: PrayerNode[] = [
  yezewetr,
  {
    id: "wedase",
    title: "የዕለቱ ውዳሴ ማርያም",
    type: "category",
    children: [...monday, ...tuesday, ...wednesday, ...thursday, ...friday, ...saturday, ...sunday],
  },
  ...otherPrayers,
];
