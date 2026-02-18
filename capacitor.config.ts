import type { CapacitorConfig } from "@capacitor/cli";

// When CAPACITOR_SERVER_URL is set (e.g. your Vercel URL), the app loads from the
// web instead of bundled files. Deploy to Vercel → users get updates without
// downloading a new APK. Unset for local/bundled builds.
const serverUrl = process.env.CAPACITOR_SERVER_URL;

const config: CapacitorConfig = {
  appId: "com.abinet.prayer.app",
  appName: "ብርሃነ ሕይወት",
  webDir: "out",
  ...(serverUrl ? { server: { url: serverUrl } } : {}),
};

export default config;
