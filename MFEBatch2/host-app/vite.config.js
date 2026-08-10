import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "hostApp",

      remotes: {
        productList:
          "http://localhost:5001/assets/remoteEntry.js",
      },

      shared: ["react", "react-dom","react-redux"],
    }),
  ],

  build: {
    target: "esnext",
  },

  server: {
    port: 5173,
    strictPort: true,
  },
});