import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

//Añadir 
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';




// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),react(), robotsTxt()],
  site: 'https://porfolio.dev/'
})
