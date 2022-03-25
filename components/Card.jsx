import Image from 'next/image';

export default function Card({ children, image, height = 'h-[200px]', container }) {
  return (
    <div className='bg-card rounded-xl overflow-hidden mb-3'>
      <div className={`relative rounded-xl overflow-hidden w-full ${height} ${container}`}>
        <Image src={image} alt='Placeholder image' layout='fill' objectFit='cover' />
        <div className='hidden md:block absolute inset-0 bg-primary opacity-0 hover:opacity-70 transition-all'>
          {children}
        </div>
      </div>
      <div className='md:hidden p-3'>
        {children || 'Provide information here'}
      </div>
    </div>
  )
}
