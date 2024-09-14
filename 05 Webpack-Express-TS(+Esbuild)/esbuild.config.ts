import { build } from "esbuild";

build({
  entryPoints: ["./src/server.ts"],
  bundle: true,
  minify: true,
  platform: "node",
  outfile: "dist2/server.js",
  target: "node20",
  sourcemap: true,
}).catch(() => process.exit(1));
