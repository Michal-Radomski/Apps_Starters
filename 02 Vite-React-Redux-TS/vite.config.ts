import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); //* https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
  return {
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
          implementation: sass,
        },
      },
    },
  };
});
