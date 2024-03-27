import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite-pwa-org.netlify.app/guide/
export default defineConfig({
  plugins: [react(), VitePWA({ registerType: "autoUpdate" })],
  // shadcn/ui
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
