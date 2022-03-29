import Image from 'next/image'

export default function ImageCapt({ image, alt, children }) {
  return (
    <figure className='flex flex-col items-center'>
      <Image src={image} alt={alt} height={100} width={100} />
      <figcaption>
        {children}
      </figcaption>
    </figure>
  )
}