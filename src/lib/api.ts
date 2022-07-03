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
//  microcmsClient.get({ endpoint: 'articles' })の返り値
// {
//   contents: [
//     {
//       id: 'rm9v8-2juh',
//       createdAt: '2022-05-08T08:45:25.288Z',
//       updatedAt: '2022-06-26T14:05:38.430Z',
//       publishedAt: '2022-05-08T08:45:25.288Z',
//       revisedAt: '2022-06-26T14:05:38.430Z',
//       title: '（サンプル）まずはこの記事を開きましょう',
//       body: '<h2 id="hdb41525ba7">ブログテンプレートから作成されました🎉</h2><p>ブログテンプレートからAPIを作成しました。<br>おつかれさまでした🎉<br></p><h2 id="hf45076424a">APIプレビューを試そう🚀</h2><p>最初に「APIプレビュー」をしてみましょう。<br>入稿したコンテンツはAPI経由で取得し、Viewに繋ぎ込みます。<br>APIプレビューでは実際のAPIレスポンスを確認でき、あなたの開発を加速させます。<br><br>👇まずはここをクリックします。<br><img src="https://images.microcms-assets.io/assets/49b8026b1b364416973be9c1b7d99cbb/bf75b9e2c46c468484a7503ad1b445ce/blog-template-description1.png" alt=""><br><br>APIプレビュー画面が開いたら、<strong>「取得」</strong>ボタンでリクエストを試してみましょう。<br><img src="https://images.microcms-assets.io/assets/49b8026b1b364416973be9c1b7d99cbb/56234ae4492f484594e825ec366d5c7c/blog-template-description2.png" alt=""></p><h1 id="hf85bd5223e">df</h1><p>この記事の内容がAPIで取得できていることがわかります。<br><img src="https://images.microcms-assets.io/assets/49b8026b1b364416973be9c1b7d99cbb/78367ca8c6b84e07a1ae00b4b521d3f2/blog-template-description3.png" alt=""></p><h2 id="h4c50a0f1e5"><br>次にやること🏃‍♂️</h2><p>APIプレビューで確認したレスポンスを参考に、あなた自身のWebサイトを構築しましょう。<br>microCMSはAPIでコンテンツを取得するため、お好きな言語・フレームワークで画面を構築できます。<br></p><ul><li><a href="https://document.microcms.io/tutorial/javascript/javascript-top" target="_blank" rel="noopener noreferrer">JavaScript SDK</a></li><li><a href="https://document.microcms.io/tutorial/nuxt/nuxt-top" target="_blank" rel="noopener noreferrer">Nuxt SDK</a></li><li><a href="https://document.microcms.io/tutorial/gatsby/gatsby-top" target="_blank" rel="noopener noreferrer">Gatsby SDK</a></li></ul><p><br>その他に<a href="https://microcms.io/features/sdk" target="_blank" rel="noopener noreferrer">サーバーサイドSDK（PHP / Go / Ruby）やモバイルSDK（iOS / Android）</a>もございます。<br><br>お困りなことや疑問点などございましたらお気軽にご連絡ください。<br><br>サポート窓口：<a href="mailto:support@microcms.io">support@microcms.io</a><br>よくある質問：<a href="https://help.microcms.io/ja/knowledge" target="_blank" rel="noopener noreferrer">https://help.microcms.io/ja/knowledge</a></p>',
//       eyecatch: [Object],
//       category: [Object]
//     }
//   ],
//   totalCount: 1,
//   offset: 0,
//   limit: 10
// }
