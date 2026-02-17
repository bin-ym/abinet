import {
  getAllCategoryIds,
  getAllPrayerIds,
  findNodeById,
} from "./app/lib/prayer-utils";
import { prayerData } from "./app/data/prayers";

console.log("Verifying Prayer Data...");

const categoryIds = getAllCategoryIds();
console.log(`Found ${categoryIds.length} categories.`);
for (const id of categoryIds) {
  const node = findNodeById(id);
  if (!node) {
    console.error(
      `ERROR: Category ID '${id}' found in getAllCategoryIds but NOT in findNodeById!`,
    );
  } else if (node.type !== "category") {
    console.error(
      `ERROR: Category ID '${id}' found but type is '${node.type}' (expected 'category')`,
    );
  }
}

const prayerIds = getAllPrayerIds();
console.log(`Found ${prayerIds.length} prayers.`);
for (const id of prayerIds) {
  const node = findNodeById(id);
  if (!node) {
    console.error(
      `ERROR: Prayer ID '${id}' found in getAllPrayerIds but NOT in findNodeById!`,
    );
  } else if (node.type !== "prayer") {
    console.error(
      `ERROR: Prayer ID '${id}' found but type is '${node.type}' (expected 'prayer')`,
    );
  }
}

console.log("Verification complete.");
