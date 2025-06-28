// Miglaa/lib/sanity.js
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'emp6v47g', // 🛑 Replace with your actual project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-06-28',
})
