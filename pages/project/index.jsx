import Layout from '../../components/Layout'
import AllProjects from '../../components/AllProjects'
import Button from '../../components/Button'
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const metaContent = {
  url: "/project",
  title: "My Projects",
  description: "This is my projects gallery. You can see my project here. Or find inspiration for your next project.",
  img: "/share/my-projects.png",
}

const bannerContent = (
  <>
  {/* // TODO: Layouting project page and create dynamic page using markdown */}
    <h1>My <em>projects</em></h1>
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

export default function Projects({ allPostsData }) {
  return (
    <Layout bannerContent={bannerContent} metaContent={metaContent} project>
      <AllProjects data={allPostsData} />
    </Layout>
  )
}