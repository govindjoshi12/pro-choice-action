import Head from 'next/head'
import Title from '../components/Title'
import APITEST from '../components/APITEST'


export default function Home() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta
          property="og:title"
          content="My page title"
          key="title"
        />
      </Head>

      <Title />
      {/* <APITEST /> */}

    </div>
  )
}
