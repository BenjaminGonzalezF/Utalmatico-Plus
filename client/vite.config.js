import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  root: './client', 
  build: {
    outDir: '../dist', 
  },
  server: {
    port: 3000,
    proxy: {
      "/api": "3001",
    },
  },
  plugins: [
    [reactRefresh()],
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
