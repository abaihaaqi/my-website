import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/Layout'
// import Gallery from '../components/Gallery'
import InfoSection from '../components/InfoSection'
import AllProjects from '../components/AllProjects'

import speedTest from '../public/illustration/speed-test.svg'
import websiteBuilder from '../public/illustration/website-builder.svg'
import innovative from '../public/illustration/innovative.svg'

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
      <article>
        {/* <Gallery title={'Design'} /> */}
        <section className='xl:grid grid-cols-3 gap-10 max-w-2xl xl:max-w-5xl mx-auto xl:my-32'>

          <InfoSection image={speedTest}>
            <h2 className='tracking-tighter italic font-light'>Fast</h2>
            <p>
              {"I'm using Nextjs which have known the performance"}
            </p>
          </InfoSection>

          <InfoSection image={websiteBuilder}>
            <h2 className='tracking-widest font-light'>Flexible</h2>
            <p>
              Build anything you like, from a landing page to new e-commerce
            </p>
          </InfoSection>

          <InfoSection image={innovative}>
            <h2 className='tracking-widest font-light'>Awesome Design</h2>
            <p>
              Imagination is the limit.
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
