export type PrayerNode = {
  id: string;
  title: string;
  type: "category" | "prayer";
  children?: PrayerNode[];
  content?: string;
  audio?: string;
};
