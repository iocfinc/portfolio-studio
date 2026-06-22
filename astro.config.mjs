import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://iocfinc.github.io",
  integrations: [mdx()],
  output: "static",
});
