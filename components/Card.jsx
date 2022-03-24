import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from './Button';
import wavePortal from '../public/design/wave-portal.png'

export default function Card({ image = wavePortal, title = 'Wave Portal', desc = 'a wave portal app', link = 'wave-portal', linkName = 'Find out', rightText }) {
  const router = useRouter()

  return (
      <div className={rightText ? 'card mb-3 p-2 md:grid grid-cols-3' : 'card mb-3 p-2 w-full'}>
        <figure className='rounded-lg overflow-hidden col-span-2'>
          <Image layout='responsive' src={image} alt={`${title} image`} />
        </figure>
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
