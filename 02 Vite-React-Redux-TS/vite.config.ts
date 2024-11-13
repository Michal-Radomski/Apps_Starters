import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); //* https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
  return {
    server: {
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
      eslintPlugin({
        cache: false,
        include: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"], // Adjust file types as needed
        exclude: [/virtual:/, /node_modules/],
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
