import { defineConfig } from 'astro/config'
import preact from "@astrojs/preact"

// https://astro.build/config
export default defineConfig({
  site: 'https://build-a-blog-protono.netlify.app/',
  // site: 'http://localhost:4321/'
  integrations: [preact()]
})