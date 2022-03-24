import { useRouter } from 'next/router';
import Button from './Button';

export default function Card({ image = '/design/wave-portal.png', title = 'Wave Portal', desc = 'a wave portal app', link = 'wave-portal', linkName = 'Find out', rightText }) {
  const router = useRouter()

  return (
      <div className={rightText ? 'card mb-3 p-2 md:grid grid-cols-3' : 'card mb-3 p-2'}>
        <img className='rounded-lg col-span-2' src={image} alt={`${title} image`} />
        <div className='flex flex-col justify-between'>
          <div />
          <div className='pt-3 px-3'>
            <h4>{title}</h4>
            <p className='description'>{desc}</p>
          </div>
          <div className='flex justify-end mt-6'>
            <Button click={() => router.push(`/${link}`)}>
              {linkName}
            </Button>
          </div>
        </div>
      </div>
  )
}
