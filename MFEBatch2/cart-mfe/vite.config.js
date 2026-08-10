import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "cart",

      filename: "remoteEntry.js",

      exposes: {
        "./cartMFE": "./src/components/organism/Cart/Cart.jsx",
      },

      shared: ["react", "react-dom","react-redux"],
    }),
  ],

  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },

  preview: {
    port: 5002,
    strictPort: true,
  },
});