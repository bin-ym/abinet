const fs = require("fs");
const path = require("path");

const files = [
  "app/data/yezewetr.ts",
  "app/data/wedase-part1.ts",
  "app/data/wedase-part2.ts",
  "app/data/others.ts",
];

const exclusions = new Set([
  "ቤተ",
  "ዮሴፍ",
  "ኦሪት",
  "ትካት",
  "እሳት",
  "ሞት",
  "ገነት",
  "ባት",
  "መንሱት",
  "ናት",
  "ሐዋርያት",
  "ሰማያት",
  "ፍጥረት",
  "ስሕተት",
  "እመቤተ",
  "አንተ",
  "ውእቱ",
]);
// "አንተ" and "ውእቱ" are risky. In yezewetr.ts they appeared as "አንተተ", "ውእቱተ". So "አንተ" alone might be word.
// "ትካት" (ancient times) ends in "ት". Safe.
// "እሳት" (fire) ends in "ት". Safe.
// "ሞት" (death) ends in "ት". Safe.
// "ገነት" (paradise) ends in "ት". Safe.
// "ባት" (in her) ends in "ት". Safe.
// "መንሱት" (temptation) ends in "ት". Safe.
// "ናት" (is) ends in "ት". Safe. (Amharic not Ge'ez, but plausible).
// "ሐዋርያት" ends in "ት".
// "ሰማያት" ends in "ት".
// "ፍጥረት" ends in "ት".
// "ስሕተት" ends in "ት".
// "እመቤተ" (Our Lady - construct state). Ends in "ተ". "Emebete". Might be word.
// "አንተ" (You). "ውእቱ" (He).
// If "አንተ" appears alone, don't format 'ተ'. If "አንተተ", format last 'ተ'.
// My regex matches only the LAST char. So "አንተ" -> match "ተ". If excluded, skip.
// "አንተተ" -> match last "ተ". Word is "አንተተ". Not in exclusion. Replace. "አንተ<sup>ተ</sup>". Correct.

// Refined exclusions list (words ending in ተ, ቂ, ጣ, ፍ that are NOT signs):
// ተ: ቤተ, እመቤተ, አንተ, ውእቱ, ኬላተ (?), ባሕቲት (ends in ት), ት (safe).
// ቂ: ደቂቂ (children)?
// ጣ: ዕጣ (lot)?
// ፍ: ዮሴፍ, ያዕቆብ (ends in ብ), ጸሐፍ (write)?
// Note: "ት" is distinct from "ተ". Most exclusions above end in "ት", so they are safe from "ተ" matching.
// Only words ending in "ተ" are risky.
// "ቤተ", "እመቤተ", "አንተ", "ውእቱ".

const realExclusions = [
  "ቤተ",
  "እመቤተ",
  "አንተ",
  "ውእቱ",
  "ዮሴፍ",
  "ዕጣ",
  "ጸሐፍ",
  "መሳፍንት",
]; // መሳፍንት ends in ት.

function processFile(filePath) {
  const fullPath = path.resolve(filePath);
  if (!fs.existsSync(fullPath)) return;

  let content = fs.readFileSync(fullPath, "utf8");

  // Regex to match words ending in Zema signs
  // We identify the word boundary.
  // We look for chars [ጣቂፍተ] at the end of a word.
  // We capture the word prefix and the sign.

  content = content.replace(
    /([^\s፣።"';`]+)([ጣቂፍተ])(?=[\s፣።"';`]|$)/gu,
    (match, wordPrefix, sign) => {
      // Check if the FULL word (prefix + sign) is in exclusion list
      const fullWord = wordPrefix + sign;
      if (realExclusions.includes(fullWord)) {
        return match; // No change
      }
      // Also check if wordPrefix ends in something that makes it look like a word?
      // E.g. "አንተተ". Prefix "አንተ". Sign "ተ". Full "አንተተ". Not excluded. -> "አንተ<sup>ተ</sup>".
      // "ቤተ". Prefix "ቤ". Sign "ተ". Full "ቤተ". Excluded. -> "ቤተ".

      return wordPrefix + "<sup>" + sign + "</sup>";
    },
  );

  fs.writeFileSync(fullPath, content, "utf8");
  console.log(`Processed ${filePath}`);
}

files.forEach((f) => processFile(f));
