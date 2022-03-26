import { useRouter } from 'next/router'
import Card from './Card'
import Button from './Button'
import Date from './Date'

export default function AllProjects({ data }) {
  const router = useRouter()

  return (
    <div className='px-3 lg:px-0 md:container md:max-w-3xl'>
      {data.map(({ id, date, title, author }) => (
        <Card key={id}>
          <h3>{title}</h3>
          <div className='description flex items-center gap-1'>
            <p>{author} @ </p>
            <Date dateString={date} />
          </div>
          <div className='flex justify-end items'>
            <Button click={() => router.push(`/project/${id}`)}>
              Read more
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}