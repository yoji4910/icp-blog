import { createClient } from 'microcms-js-sdk'

export const microcmsClient = createClient({
  serviceDomain: 'icp-blog',
  apiKey: process.env.API_KEY || '',
})
