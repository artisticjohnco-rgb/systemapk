import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  // Change appId to your own reverse-domain identifier before publishing to Google Play.
  // It cannot be changed after the app is published.
  appId: "app.thesystem.levelup",
  appName: "The System",
  webDir: "dist/native",
  server: {
    androidScheme: "https",
  },
};

export default config;
