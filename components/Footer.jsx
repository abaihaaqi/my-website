import Image from 'next/image'
import { LinkedinLogo, Newspaper, PaperPlaneTilt, TwitterLogo } from "phosphor-react";
import { footerLink } from './Footer.module.css'
import versionControl from '../public/illustration/version-control.svg'

export default function Footer() {
  return (
    <footer className="bg-card flex justify-center md:gap-10 py-4 font-thin">
      <figure className='hidden md:inline w-1/3'>
        <Image src={versionControl} alt="Version control illustration" />
      </figure>
      <div className="flex flex-col justify-center items-center md:items-start">
        <h3 className="tracking-widest">Get in touch</h3>
        <nav className="flex flex-col gap-3 py-2">
          <a className={footerLink} href="mailto:nizarbaihaq@gmail.com">
            <PaperPlaneTilt size={24} /> Email
          </a>
          <a className={footerLink} href="https://www.linkedin.com/in/nizar-baihaqi" target="_blank" rel="noopener noreferrer">
            <LinkedinLogo size={24} /> Linkedin
          </a>
          <a className={footerLink} href="https://twitter.com/abaihaaqi">
            <TwitterLogo size={24} /> @abaihaaqi
          </a>
          <a className={footerLink} href="https://twitter.com/abaihaaqi">
            <Newspaper size={24} /> Blog posts
          </a>
        </nav>
      </div>
    </footer>
  )
}