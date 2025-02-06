To add a Browserslist configuration to your React and Vite project, you can configure it either in your `package.json` file
or in a separate `.browserslistrc` file[4][2].

Here’s how to do it:

**1. Configure Browserslist**

- **package.json**: Add a `browserslist` key to your `package.json` file with your desired configurations for `production`
  and `development`[4][6]. For example:

```json
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 2 chrome versions",
    "last 2 firefox versions",
    "last 2 safari versions",
    "last 2 edge versions"
  ]
}
```

- **.browserslistrc**: Alternatively, you can create a file named `.browserslistrc` in the root of your project and add the
  following[4][2]:

```
[production]
>0.2%
not dead
not op_mini all

[development]
last 2 chrome versions
last 2 firefox versions
last 2 safari versions
last 2 edge versions
```

**2. Understanding the Issue with Vite and ESBuild**

Vite uses ESBuild under the hood for JavaScript transformations, but ESBuild doesn't natively support the Browserslist
format[3]. ESBuild has its own target system with a different syntax[1].

**3. Addressing the Compatibility Issue**

To ensure Vite respects your Browserslist configuration, you can use the `browserslist-to-esbuild` package to convert your
Browserslist configuration into a format that ESBuild understands[3].

- **Install the Package**:
  ```bash
  npm install browserslist-to-esbuild --save-dev
  ```
- **Update Vite Configuration**: In your `vite.config.js` or `vite.config.ts` file, import `browserslistToEsbuild` and use it
  to set the `build.target` option[3][1]:

```javascript
import { defineConfig } from "vite";
import browserslistToEsbuild from "browserslist-to-esbuild";

export default defineConfig({
  build: {
    target: browserslistToEsbuild(),
  },
});
```

**4. Using @vitejs/plugin-legacy**

If you need to support older browsers, you can use the `@vitejs/plugin-legacy`. This plugin uses Babel, which does support
Browserslist[1].

- **Install the Plugin**:

```bash
    npm install @vitejs/plugin-legacy --save-dev
```

- **Update Vite Configuration**:

```javascript
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
});
```

**Additional Notes**

- **CSS Support**: Vite supports Browserslist for CSS via PostCSS[1].
- **Specific Scenarios**: You can set different Browserslist configurations based on `NODE_ENV` to specify different browser
  ranges for development and production[4].
- **Rsbuild**: If you're using Rsbuild, it also provides an `output.overrideBrowserslist` config for setting the Browserslist
  value[2][4].

Citations: [1] https://dev.to/meduzen/when-vite-ignores-your-browserslist-configuration-3hoe [2]
https://rsbuild.dev/guide/advanced/browserslist [3]
https://www.freecodecamp.org/news/how-to-migrate-from-create-react-app-to-vite/ [4]
https://v0.rsbuild.dev/guide/advanced/browserslist [5] https://github.com/vitejs/vite/discussions/6849 [6]
https://community.atlassian.com/t5/Bitbucket-questions/react-scripts-gt-2-you-must-specify-targeted-browsers-it-s/qaq-p/2295569
[7] https://stackoverflow.com/questions/79033280/vite-browserslist-transpile-code-to-be-compatible-with-browsers [8]
https://stackoverflow.com/questions/78206483/react-project-compilation-failing-due-to-development-browserlist
