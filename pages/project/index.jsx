import Layout from '../../components/Layout'
import Card from '../../components/Card'
import Button from '../../components/Button'

const bannerContent = (
  <>
  {/* // TODO: Layouting project page and create dynamic page using markdown */}
    <h1>My <em>project</em></h1>
    <p className='description mb-4'>personal project</p>
    <div className='flex gap-2'>
      <Button>
        Reactjs
      </Button>
      <Button>
        Vuejs
      </Button>
      <Button>
        Laravel
      </Button>
    </div>
  </>
)

export default function Projects() {
  return (
    <Layout bannerContent={bannerContent} project>
      <article className='container max-w-4xl'>
        {/** // Todo : use gallery with vertical scrolling */}
      </article>
    </Layout>
  )
}