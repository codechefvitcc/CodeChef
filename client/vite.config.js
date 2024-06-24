import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), imagemin()],
  assetsInclude: ["**/*.JPG"],
});
