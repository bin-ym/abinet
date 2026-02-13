# PWA APK Build Instructions

## Prerequisites

- Node.js and npm installed ✓
- Bubblewrap CLI installed ✓
- Java Development Kit (JDK) 11 or higher
- Android SDK (optional, Bubblewrap can download it)

## Steps to Build APK

### 1. Deploy to Vercel First

Before building the APK, you need to deploy your app to Vercel:

```bash
# Push your code to GitHub
git add .
git commit -m "Add PWA support"
git push

# Or deploy directly with Vercel CLI
npm install -g vercel
vercel
```

After deployment, note your Vercel URL (e.g., `https://abinet-prayer.vercel.app`)

### 2. Update TWA Configuration

Edit `twa-manifest.json` and replace `abinet-prayer.vercel.app` with your actual Vercel URL.

### 3. Initialize Bubblewrap Project

```bash
cd c:\Users\Ym\Desktop\b\Projects\abinet
bubblewrap init --manifest twa-manifest.json
```

This will:

- Download Android SDK if needed
- Create a keystore for signing (save the password!)
- Generate the Android project structure

### 4. Build the APK

```bash
bubblewrap build
```

The APK will be generated in the project directory as `app-release-signed.apk`

### 5. Install on Android Device

Transfer the APK to your Android device and install it. You may need to enable "Install from unknown sources" in your device settings.

## Alternative: Use PWA Builder

If Bubblewrap has issues, you can use PWA Builder:

1. Visit https://www.pwabuilder.com/
2. Enter your deployed Vercel URL
3. Click "Package For Stores"
4. Select Android and download the APK

## Notes

- The APK will open your web app in a native Android wrapper
- Users will need internet connection to use the app
- For offline functionality, ensure service worker caching is properly configured
- For Google Play Store distribution, you'll need to sign with a production keystore
