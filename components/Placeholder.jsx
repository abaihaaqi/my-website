import Image from 'next/image'

export default function Placeholder({ height = 'h-[300px]' }) {
  return (
    <div className={`relative w-full ${height}`}>
      <Image src={`https://via.placeholder.com/300`} alt='Placeholder image' layout='fill' objectFit='cover' />
    </div>
  )
}