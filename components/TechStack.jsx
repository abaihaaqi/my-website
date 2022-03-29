import ImageCapt from './ImageCapt'
import Figma from '../public/logo/figma.svg'
import Git from '../public/logo/git.svg'
import Hardhat from '../public/logo/hardhat.svg'
import Nextjs from '../public/logo/nextjs.svg'
import Nuxtjs from '../public/logo/nuxtjs.svg'
import Tailwind from '../public/logo/tailwindcss.svg'

export default function TechStack() {
  return (
    <div className='my-6 grid grid-cols-3 lg:grid-cols-6 gap-4 content-center'>
      <ImageCapt image={Figma} alt='Figma logo'>
        Figma
      </ImageCapt>
      <ImageCapt image={Git} alt='Git logo'>
        Git
      </ImageCapt>
      <ImageCapt image={Hardhat} alt='Hardhat logo'>
        Hardhat
      </ImageCapt>
      <ImageCapt image={Nextjs} alt='Nextjs logo'>
        Nextjs
      </ImageCapt>
      <ImageCapt image={Nuxtjs} alt='Nuxtjs logo'>
        Nuxtjs
      </ImageCapt>
      <ImageCapt image={Tailwind} alt='Tailwindcss logo'>
        Tailwindcss
      </ImageCapt>
    </div>
  )
}