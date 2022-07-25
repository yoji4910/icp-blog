import { microcmsClient } from './client'
import type { Article } from '@/types/article'

export const getArticleById = async (id: string): Promise<Article> => {
  const article = await microcmsClient.get({
    endpoint: 'articles',
    contentId: id,
  })

  return article
}

export const getAllArticles = async (): Promise<Article[]> => {
  const data = await microcmsClient.get({ endpoint: 'articles' })
  return data.contents
}
