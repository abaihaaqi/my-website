import Head from 'next/head'
import Layout from '../layouts'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Nizar Baihaqi</title>
        {/* // TODO: SEO optimization */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {/* // TODO: Create homepage */}
        <h1 className='text-center'>This should be a homepage</h1>
      </header>
    </Layout>
  )
}
