import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "order",

      filename: "remoteEntry.js",

      exposes: {
        "./OrderMFE": "./src/components/organism/Order/Order.jsx",
      },

      shared: ["react", "react-dom","react-router-dom","react-redux"],
    }),
  ],

  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },

  preview: {
    port: 5003,
    strictPort: true,
  },
});