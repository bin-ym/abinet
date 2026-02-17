import { getAllPrayerIds } from "@/app/lib/prayer-utils";
import PrayerClient from "./PrayerClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  const ids = getAllPrayerIds();
  return ids.map((id) => ({ id }));
  // return [];
}

export default async function PrayerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PrayerClient id={id} />;
}
