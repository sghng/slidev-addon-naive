import { type Plugin, defineConfig } from "vite";

import naive from "naive-ui";

const naivePlugin = (): Plugin => {
  const virtualModuleId = "virtual:naive";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "naive",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export { ${process.env.NAIVE_COMPONENTS} } from "naive-ui";`;
      }
    },
  };
};

export default defineConfig({
  plugins: [naivePlugin()],
});
