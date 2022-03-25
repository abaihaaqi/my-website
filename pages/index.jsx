import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Card from '../components/Card'
// import Gallery from '../components/Gallery'
import Layout from '../components/Layout'
import wavePortal from '../public/design/wave-portal.png'
import speedTest from '../public/illustration/speed-test.svg'
import websiteBuilder from '../public/illustration/website-builder.svg'
import innovative from '../public/illustration/innovative.svg'
import InfoSection from '../components/InfoSection'

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
        {/* <Gallery title={'Design'} /> */}
        <section className='lg:grid grid-cols-3 gap-10 max-w-5xl mx-auto lg:mx-10 xl:mx-auto lg:my-12'>

          <InfoSection image={speedTest}>
            <h2 className='tracking-tighter italic font-light'>Fast</h2>
            Lorem ipsum dolor sit amet.
          </InfoSection>

          <InfoSection image={websiteBuilder}>
            <h2 className='tracking-widest font-light'>Flexible</h2>
            Lorem, ipsum dolor.
          </InfoSection>

          <InfoSection image={innovative}>
            <h2 className='tracking-widest font-light'>Colorful</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </InfoSection>

        </section>
        <p className='description text-center hidden md:block'>Hover the card</p>
        <section>
          <h1 className='tracking-tight font-black text-center my-10'>Project</h1>
          <div className='px-3 md:px-0 md:container md:max-w-3xl'>
            <Card image={wavePortal}>
              <h3>Wave Portal</h3>
              <p>A wave portal app</p>
              <div className='flex justify-end'>
                <Button>
                  Read more
                </Button>
              </div>
            </Card>
            <Card image={wavePortal} />
            <Card image={wavePortal} />
          </div>
        </section>
      </article>
    </Layout>
  )
}
