import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import eslintPlugin from "vite-plugin-eslint2";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // console.log("env:",env)

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
        include: ["./client/src/**/*.js", "./client/src/**/*.jsx", "./client/src/**/*.ts", "./client/src/**/*.tsx"], // Adjust file types as needed
      }),
    ],
    resolve: {
      alias: {
        "@common": path.resolve(__dirname, "../common"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          quietDeps: true,
        },
      },
    },
    build: {
      outDir: "build", // Change the output directory from 'dist' to 'build'
    },
  };
});
