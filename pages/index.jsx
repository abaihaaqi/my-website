import Head from 'next/head'
import Card from '../components/Card'
import Gallery from '../components/Gallery'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout home>
      {/* This is head for meta tags */}
      <Head>
        <title>Nizar Baihaqi</title>
        {/* // TODO: SEO optimization */}
        <link rel="icon" href="/icon/favicon.ico" />
      </Head>
      <article>
        <Gallery title={'Design'} />
        <section>
          <h1 className='mt-10 tracking-tight font-black text-center'>Project</h1>
          <div className='px-2 md:px-0 md:container md:max-w-3xl'>
            <Card rightText />
            <div className='inline md:flex gap-3'>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>
      </article>

    </Layout>
  )
}
