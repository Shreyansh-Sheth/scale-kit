import {
  DEFAULT_THEME,
  MantineProviderProps,
  createTheme,
  mergeMantineTheme,
} from "@mantine/core";

const themeOverride: MantineProviderProps["theme"] = createTheme({
  primaryColor: "cyan",
  primaryShade: 9,
  defaultRadius: "lg",
});
export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
