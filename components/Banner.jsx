import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from './Button';
import Navbar from './Navbar';

export default function Banner({ content, home }) {
  const router = useRouter()

  return (
    <header>
      {content && (
        <div className='relative h-[50vh]'>
          <Navbar />
          <div className='flex flex-col h-full justify-center items-center text-center absolute inset-x-0 z-10'>
            {content}
          </div>
        </div>
      )}
      {home && (
        <div className='bg-card h-screen relative md:pt-7'>
          <Navbar />
          <div className='flex items-center h-full gap-16 absolute top-0 inset-x-0 z-10'>

            <div className='hidden md:flex flex-col items-end w-1/2'>
              <img className='w-[400px]' src={'/illustration/in-the-office.svg'} alt="unDraw Illustration" />
            </div>

            <div className='flex flex-col md:w-1/2 ml-8 md:ml-0'>
              <div>
                <h1 className='tracking-tighter italic font-bold'>Fast,</h1>
                <h1 className='tracking-widest font-semibold'>Flexible</h1>
                <h3 className='tracking-widest font-light'>and look cool.</h3>
                <p className='description'>
                  <Link href='/me'>
                    <a>Nizar Baihaqi</a>
                  </Link>
                  {' - Website Development'}
                </p>
              </div>
              <div className='mt-10 flex gap-2'>
                <Button click={() => router.push('/design')}>
                  Design
                </Button>
                <Button click={() => router.push('/project')}>
                  Project
                </Button>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  )
}