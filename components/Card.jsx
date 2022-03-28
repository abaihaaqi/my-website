import Image from 'next/image'
import style from './Card.module.css'
import defaultImg from '../public/share/default.png'

export default function Card({ children, image, alt }) {
  return (
    <div className='bg-card rounded-xl overflow-hidden mb-4'>
      <div className={style.container}>
        
        <div className={style.image}>
          <Image src={image || defaultImg} alt={alt || 'Placeholder image'} layout='responsive' />
        </div>

        <div className={style.text}>
          {children}
        </div>

      </div>
      <div className='xl:hidden p-3'>
        {children || 'Provide information here'}
      </div>
    </div>
  )
}
