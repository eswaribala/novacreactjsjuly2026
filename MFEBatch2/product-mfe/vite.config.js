import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "productRemote",

      filename: "remoteEntry.js",

      exposes: {
        "./MfeButton": "./src/components/atoms/Button/Button.jsx",
      },

      shared: ["react", "react-dom"],
    }),
  ],

  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },

  preview: {
    port: 5001,
    strictPort: true,
  },
});