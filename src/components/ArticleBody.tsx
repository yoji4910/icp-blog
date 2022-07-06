import styles from '@/styles/ArticleBody.module.scss'

type Props = {
  body: string
}

export const ArticleBody = (props: Props) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: props.body,
        }}
        className={styles.article}
      ></div>
      <a href='#'>こんちわ</a>
    </>
  )
}

// export const ArticleBody = styled(Component)`
//   h1 {
//     font-size: 30px;
//     font-weight: bold;
//   }

//   h2 {
//     font-style: 24px;
//     font-weight: bold;
//   }

//   a {
//     font-size: 44px;
//   }
// `
