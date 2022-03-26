import Head from 'next/head'
// import Gallery from '../components/Gallery'
import Layout from '../components/Layout'
import speedTest from '../public/illustration/speed-test.svg'
import websiteBuilder from '../public/illustration/website-builder.svg'
import innovative from '../public/illustration/innovative.svg'
import InfoSection from '../components/InfoSection'
import { getSortedPostsData } from '../lib/posts'
import AllProjects from '../components/AllProjects'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* This is head for meta tags */}
      <Head>
        <title>Nizar Baihaqi</title>
        {/* // TODO: SEO optimization */}
        <link rel="icon" href="/icon/favicon.ico" />
      </Head>
      <article>
        {/* <Gallery title={'Design'} /> */}
        <section className='xl:grid grid-cols-3 gap-10 max-w-2xl xl:max-w-5xl mx-auto xl:my-32'>

          <InfoSection image={speedTest}>
            <h2 className='tracking-tighter italic font-light'>Fast</h2>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </InfoSection>

          <InfoSection image={websiteBuilder}>
            <h2 className='tracking-widest font-light'>Flexible</h2>
            <p>
              Lorem, ipsum dolor.
            </p>
          </InfoSection>

          <InfoSection image={innovative}>
            <h2 className='tracking-widest font-light'>Colorful</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </InfoSection>

        </section>
        <section>
          <h1 className='tracking-tight font-black text-center my-10'>Projects</h1>
          <AllProjects data={allPostsData} />
        </section>
      </article>
    </Layout>
  )
}
