// @ts-nocheck
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
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
