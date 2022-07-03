import { ParsedUrlQuery } from 'querystring'
import { GetStaticProps } from 'next'
import type { Article } from '../../types/article'
import { getAllArticles, getArticleById } from '@/lib/api'

type Props = {
  article: Article
}

interface Params extends ParsedUrlQuery {
  id: string
}

export default function Article({ article }: Props) {
  return (
    <div className='bg-gray-50'>
      <div className='px-10 py-6 mx-auto'>
        <div className='max-w-6xl px-10 py-6 mx-auto bg-gray-50'>
          <img
            src={article.eyecatch.url}
            className='object-cover w-full shadow-sm h-full'
            alt='image'
          />
          <div className='mt-2'>
            <div className='sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500'>
              {article.title}
            </div>
          </div>
          {article.category.name && (
            <div className='flex items-center justify-start mt-4 mb-4'>
              <div className='px-2 py-1 font-bold bg-red-400 text-white rounded-lg'>
                #{article.category.name}
              </div>
            </div>
          )}
          <div
            className='mt-2'
            dangerouslySetInnerHTML={{
              __html: article.body,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const article = await getArticleById(params!.id)

  return {
    props: {
      article: article,
    },
  }
}

export const getStaticPaths = async () => {
  const articles = await getAllArticles()

  return {
    paths: articles.map((article: Article) => {
      return {
        params: {
          id: article.id,
        },
      }
    }),
    fallback: false,
  }
}
