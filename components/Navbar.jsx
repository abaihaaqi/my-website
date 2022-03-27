import Image from "next/image";
import Link from "next/link";
import { Factory, IdentificationCard, Newspaper, Palette } from "phosphor-react";
import { navbarLink } from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className='mx-auto flex justify-between items-center bg-accent lg:rounded-lg md:max-w-4xl absolute inset-x-0 z-30'>
      <Link href="/">
        <a className={navbarLink}>
          <Image src="/icon/favicon-32x32.png" width={32} height={32} alt="Logo Nizar Baihaqi" />
          <span className="hidden sm:inline">
            Nizar Baihaqi
          </span>
        </a>
      </Link>
      <div className="flex">
        {/* <Link href={'/design'}>
          <a title="Design page" className={navbarLink}>{width > 500 ? 'Design' : <Palette size={32} />}</a>
        </Link> */}
        <Link href={'/project'}>
          <a title="Project page" className={navbarLink}>
            <Factory size={32} />
            <span className="hidden md:inline">
              My Projects
            </span>
          </a>
        </Link>
        <Link href={'/me'}>
          <a title="About me" className={navbarLink}>
            <IdentificationCard size={32} />
            <span className="hidden md:inline">
              About Me
            </span>
          </a>
        </Link>
        <Link href={'/case-study'}>
          <a title="Case Study" className={navbarLink}>
            <Newspaper size={32} />
            <span className="hidden md:inline">
              Case Study
            </span>
          </a>
        </Link>
      </div>
    </nav>
  )
}