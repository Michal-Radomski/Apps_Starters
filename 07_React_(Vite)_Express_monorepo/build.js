const { build } = require("esbuild");

build({
  entryPoints: ["./api/api.ts"],
  bundle: true,
  minify: true,
  platform: "node",
  outfile: "dist/api.js",
}).catch(() => process.exit(1));
