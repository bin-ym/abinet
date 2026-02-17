import { getAllCategoryIds } from "@/app/lib/prayer-utils";
import CategoryClient from "./CategoryClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  const ids = getAllCategoryIds();
  return ids.map((id) => ({ id }));
  // return [];
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CategoryClient id={id} />;
}
