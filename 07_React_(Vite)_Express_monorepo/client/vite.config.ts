import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import eslintPlugin from "vite-plugin-eslint2";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); //* https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
  return {
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: "http://localhost:5000", // Your backend server URL
          changeOrigin: true, // Changes the origin of the host header to the target URL
          // rewrite: (path) => path.replace(/^\/api/, ''), // Optionally rewrite the path
        },
      },
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
        include: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Adjust file types as needed
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          quietDeps: true,
        },
      },
    },
  };
});
