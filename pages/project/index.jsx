import Layout from '../../components/Layout'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Button from '../../components/Button'

const bannerContent = (
  <>
  {/* // TODO: Layouting project page and create dynamic page using markdown */}
    <h1>My <em>*purojekto*</em></h1>
    <p className='description mb-4'>personal project</p>
    <div className='flex gap-2'>
      <Button></Button>
      <Button></Button>
      <Button></Button>
    </div>
  </>
)

export default function Projects() {
  return (
    <Layout bannerContent={bannerContent}>
      <article>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </article>
    </Layout>
  )
}