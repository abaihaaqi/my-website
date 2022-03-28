import { useRouter } from 'next/router'
import Card from './Card'
import Button from './Button'
import Date from './Date'

export default function AllProjects({ data }) {
  const router = useRouter()

  return (
    <div className='px-3 xl:px-0 lg:shadow-xl lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:max-w-5xl mx-auto'>
      {data.map(({ id, date, title, author }) => (
        <Card key={id}>
          <h3>{title}</h3>
          <div className='description flex items-center gap-1'>
            <p>{author} @ </p>
            <Date dateString={date} />
          </div>
          <div className='flex justify-end items mt-6'>
            <Button click={() => router.push(`/project/${id}`)}>
              Read more
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}