// @ts-nocheck
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    serverless: true,
    webAnalytics:{
      enabled: true,
    },
  }),
  env:{
    schema:{
      NUMBER_BOSS: envField.number({
        context: "client",
        access: "public",
      })
    },
  },
});
