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
    hmr: {
      protocol: 'wss',
      host: 'j10c201.p.ssafy.io',
      port: 3000,
      // 클라이언트가 서버와 같은 호스트에 없을 경우 사용합니다.
      clientPort: 443 // 클라이언트가 HTTPS를 통해 접근하는 경우 443 포트를 사용할 수 있습니다.
    }
  },
});
