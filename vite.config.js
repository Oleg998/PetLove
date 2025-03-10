import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { webcrypto } from 'crypto';
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto;
}
export default defineConfig({
  base: "/petlove/",
  plugins: [react()],
  resolve: {
    alias: {
      crypto: "crypto-browserify", 
    },
  },
  build: {
    target: "esnext", 
  },
  server: {
    port: 3000, 
    open: true,
  },
});
