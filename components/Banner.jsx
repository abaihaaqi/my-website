import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from './Button';
import Navbar from './Navbar';
import Rangitikei from '../public/bg/Rangitikei.svg'

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
        <div className='h-screen relative lg:pt-3 xl:pt-7'>
          <Image src={Rangitikei} layout='fill' objectFit='cover' alt='' />
          <div className='absolute inset-0 z-10 bg-black opacity-40' />
          <Navbar />
          <div className='absolute inset-0 z-20 flex flex-col justify-center max-w-3xl mx-auto px-3 xl:px-0'>
            <div className='bg-card py-3 px-6 rounded-xl' >
              <div>
                <h1 className='tracking-tighter italic font-bold pt-6 text-lg md:text-2xl'>Building website</h1>
                <h1 className='tracking-widest font-semibold text-lg'>{"doesn't have to be difficult"}</h1>
              </div>
              <div className='mt-10 flex justify-end items-center gap-2'>
                <Link href='/me'>
                  <a className='description text-black'>Nizar Baihaqi 👋</a>
                </Link>
                {/* <Button click={() => router.push('/design')}>
                  Design
                </Button> */}
                <Button click={() => router.push('/project')}>
                  My Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}