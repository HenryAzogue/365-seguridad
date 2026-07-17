// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  env:{
    schema:{
      NUMBER_BOSS: envField.number({
        context: "client",
        access: "public",
      })
    },
  },
});
