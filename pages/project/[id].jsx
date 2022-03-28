import { useRouter } from 'next/router'
import Date from '../../components/Date'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import { getAllPostsIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostsIds()
  return {
    paths,
    fallback: false
  }
}

export default function PublishedProject({ postData }) {
  const router = useRouter()

  const metaContent = {
    url: postData.id,
    title: postData.title,
    description: postData.desc,
    img: postData.img || '/my-projects.png'
  }

  const bannerContent = (
    <>
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      <Button click={() => router.push('/project')}>
        All projects
      </Button>
    </>
  )

  return (
    <Layout bannerContent={bannerContent} metaContent={metaContent} md>
      <div className='flex items-center gap-1'>
        <p>{postData.author} @</p>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}