import Image from 'next/image'
import style from './InfoSection.module.css'

export default function InfoSection({ children, image }) {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <Image src={image} alt='Speed test illustration' />
      </div>
      <div className={style.text}>
        {children}
      </div>
    </div>
  )
}