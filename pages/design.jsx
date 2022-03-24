import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'

const bannerContent = (
  <>
    <h1 className="tracking-widest font-extralight text-center">Gallery</h1>
    <p className='description italic'>Most of my design is using <a href="http://www.figma.com" target="_blank" rel="noopener noreferrer">Figma</a></p>
  </>
)

export default function Design() {
  return (
    <Layout bannerContent={bannerContent}>
      {/* // TODO: Head tag and SEO */}
      <article className='mb-2'>
        <Gallery />
      </article>
    </Layout>
  )
}