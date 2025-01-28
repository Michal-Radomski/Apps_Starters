import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// Todo: Add Eslint plugin!
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); //* https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
  return {
    server: {
      host: true,
      port: 3000,
    },
    define: {
      "process.env": env,
    },
    plugins: [
      react(),
      legacy({
        targets: ["defaults", "not IE 11"], //* Default: 'last 2 versions and not dead, > 0.3%, Firefox ESR'
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler", // or "modern", "legacy"
          quietDeps: true,
        },
      },
    },
  };
});
