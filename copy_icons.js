const fs = require("fs");
const path = require("path");

const srcIcon = "public/icon-192x192.png";
const baseDest = "android/app/src/main/res";

const dirs = [
  "mipmap-mdpi",
  "mipmap-hdpi",
  "mipmap-xhdpi",
  "mipmap-xxhdpi",
  "mipmap-xxxhdpi",
];

dirs.forEach((dir) => {
  const fullDir = path.join(baseDest, dir);
  if (!fs.existsSync(fullDir)) {
    fs.mkdirSync(fullDir, { recursive: true });
  }

  const destFile = path.join(fullDir, "ic_launcher.png");
  const destRound = path.join(fullDir, "ic_launcher_round.png");

  fs.copyFileSync(srcIcon, destFile);
  fs.copyFileSync(srcIcon, destRound);
  console.log(`Copied icons to ${dir}`);
});
