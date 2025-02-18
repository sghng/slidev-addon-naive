import { type Plugin, computed, ref } from "vue";

import { darkTheme, lightTheme } from "naive-ui";
import { ConfigProviderInjection } from "naive-ui/es/config-provider/src/internal-interface.js";

import { themeOverrides } from "./styles.ts";
import isDark from "./useDarkTheme.ts";

/**
 * I'm trying to mimic the design of original Naive UI, which can be found by
 * checking default theme variables or inspecting Naive UI website.
 *
 * https://www.naiveui.com/en-US/docs/theme
 */

const configProvider: Plugin = (app) => {
  // Manually inject n-config-provider context
  app.provide("n-config-provider", {
    mergedThemeRef: computed(() => (isDark.value ? darkTheme : lightTheme)), // required
    mergedThemeOverridesRef: themeOverrides, // required
    mergedClsPrefixRef: ref("n"), // required for styles
  } as Partial<ConfigProviderInjection>);
};

export default configProvider;
