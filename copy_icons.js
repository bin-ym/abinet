const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Prefer logo.jpg, fallback to logo.png
const srcIcon = fs.existsSync("public/logo.jpg")
  ? "public/logo.jpg"
  : "public/logo.png";
const baseDest = "android/app/src/main/res";

// Android launcher sizes in px
const dirs = [
  { dir: "mipmap-mdpi", size: 48 },
  { dir: "mipmap-hdpi", size: 72 },
  { dir: "mipmap-xhdpi", size: 96 },
  { dir: "mipmap-xxhdpi", size: 144 },
  { dir: "mipmap-xxxhdpi", size: 192 },
];

async function main() {
  for (const { dir, size } of dirs) {
    const fullDir = path.join(baseDest, dir);
    if (!fs.existsSync(fullDir)) {
      fs.mkdirSync(fullDir, { recursive: true });
    }

    // Full-size on mobile: fill the entire square (cover), no letterboxing
    const png = await sharp(srcIcon)
      .resize(size, size, { fit: "cover", position: "center" })
      .png()
      .toBuffer();

    const destFile = path.join(fullDir, "ic_launcher.png");
    const destRound = path.join(fullDir, "ic_launcher_round.png");
    fs.writeFileSync(destFile, png);
    fs.writeFileSync(destRound, png);
    console.log(`Wrote PNG icons (${size}×${size}, full-bleed) to ${dir}`);
  }

  const adaptiveDir = path.join(baseDest, "mipmap-anydpi-v26");
  if (fs.existsSync(adaptiveDir)) {
    fs.rmSync(adaptiveDir, { recursive: true });
    console.log("Removed mipmap-anydpi-v26 so launcher uses your logo.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
