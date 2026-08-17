import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
    test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",

    pool: "threads",
    maxWorkers: 1,
    fileParallelism: false,

    coverage: {
      provider: "v8",

      reporter: [
        "text",
        "json",
        "html",
      ],

      include: [
        "src/**/*.{js,jsx,ts,tsx}",
      ],

      exclude: [
        "node_modules/**",
        "test/**",
        "dist/**",
        "src/setupTests.js",
      ],
    },
  },

})
