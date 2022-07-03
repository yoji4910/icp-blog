import Link from 'next/link'
import { microcmsClient } from '../lib/client'
import type { Article } from '../types/article'

type Props = {
  articles: Array<Article>
}

export default function Home({ articles }: Props) {
  return (
    <>
      <h1 className='container mx-auto p-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
        記事一覧
      </h1>
      <div className='container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
        {articles.map((article) => (
          <Link href={`articles/${article.id}`} key={article.id} passHref>
            <a className='rounded overflow-hidden shadow-lg'>
              <img className='w-full' src={article.eyecatch.url} alt='Sunset' />
              <div className='p-6 py-4'>{article.title}</div>
              <div className='px-6 pt-4 pb-2'>
                {article.category && (
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    #{article.category.name}
                  </span>
                )}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await microcmsClient.get({ endpoint: 'articles' })

  return {
    props: {
      articles: data.contents,
    },
  }
}
