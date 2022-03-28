import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'

export const metaContent = {
  url: "/design",
  title: "My Design",
  description: "Collection of my beautiful design.",
  img: "/share/my-design.svg"
}

const bannerContent = (
  <>
    <h1 className="tracking-widest font-extralight text-center">Gallery</h1>
    <p className='description italic'>Most of my design is using <a href="http://www.figma.com" target="_blank" rel="noopener noreferrer">Figma</a></p>
  </>
)

export default function Design() {
  return (
    <Layout bannerContent={bannerContent} metaContent={metaContent}>
      {/* // TODO: Head tag and SEO */}
      <article className='mb-2'>
        <Gallery />
      </article>
    </Layout>
  )
}