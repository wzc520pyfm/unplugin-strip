import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import UnpluginStrip from '../src/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    UnpluginStrip({
      include: ['**/*.ts'],
    }),
  ],
})
