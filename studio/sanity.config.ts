import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Financial Abundance Hub CMS',

  projectId: 'fuhckfx7',
  dataset: 'production',

  plugins: [structureTool(),],

  schema: {
    types: schemaTypes,
  },
})
