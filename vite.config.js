import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/petlove/",
  plugins: [react()],

  build: {
    target: "esnext", 
  },
  server: {
    port: 3000, 
    open: true,
  },
});
