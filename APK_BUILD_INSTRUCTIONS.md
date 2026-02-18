# Capacitor Android APK Build

## Prerequisites

- Node.js and pnpm
- JDK 11+
- Android SDK (Android Studio or command-line)

## Build APK (live updates from Vercel)

The app can load from your Vercel URL so content (prayers, audio, etc.) updates without users downloading a new APK.

1. Deploy your site to Vercel (e.g. `https://abinet-prayer.vercel.app`).
2. Build and copy for Android with the live URL:
   ```bash
   pnpm run build:android:live
   ```
3. Build the APK:
   ```bash
   cd android && .\gradlew.bat assembleDebug
   ```
   **APK path:** `android\app\build\outputs\apk\debug\app-debug.apk`

To use a different URL, set `CAPACITOR_SERVER_URL` before the build (e.g. in `.env` or CI).

## Build APK (bundled, no server)

To ship an APK that runs fully offline from bundled files:

```bash
pnpm build
npx cap copy android
cd android && .\gradlew.bat assembleDebug
```

## App icon

The launcher icon is generated from `public/logo.jpg` (or `public/logo.png`). It is drawn **full-size** (fills the icon square). After changing the logo:

```bash
pnpm run icons
```

Then rebuild the APK.

## Install on device

Copy `app-debug.apk` to your Android device and install. You may need to allow “Install from unknown sources” in device settings.

## Notes

- For Google Play, sign with a release keystore and use `assembleRelease`.
