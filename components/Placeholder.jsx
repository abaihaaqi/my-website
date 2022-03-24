import Image from 'next/image'

export default function Placeholder({ height = 300, width = 300 }) {
  return <Image src={`https://via.placeholder.com/${width}x${height}`} width={width} height={height} alt='Placeholder image' />
}