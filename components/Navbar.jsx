import Image from "next/image";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import { Factory, IdentificationCard, Newspaper, Palette } from "phosphor-react";
import { navbarLink, active } from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className='mx-auto pr-2 lg:pr-0 flex justify-between items-center bg-accent lg:rounded-lg md:max-w-4xl absolute inset-x-0 z-30'>
      <Link href="/">
        <a className={navbarLink}>
          <Image src="/icon/favicon-32x32.png" width={32} height={32} alt="Logo Nizar Baihaqi" />
          <span className="hidden sm:inline">
            Nizar Baihaqi
          </span>
        </a>
      </Link>
      <div className="flex">
        {/* <ActiveLink href={'/design'}>
          <a title="Design page" className={navbarLink}>{width > 500 ? 'Design' : <Palette size={32} />}</a>
        </ActiveLink> */}
        <ActiveLink activeClassName={active} href={'/project'}>
          <a title="Project page" className={navbarLink}>
            <Factory size={32} />
          </a>
        </ActiveLink>
        <ActiveLink activeClassName={active} href={'/me'}>
          <a title="About me" className={navbarLink}>
            <IdentificationCard size={32} />
          </a>
        </ActiveLink>
        <ActiveLink activeClassName={active} href={'/case-study'}>
          <a title="Case Study" className={navbarLink}>
            <Newspaper size={32} />
            <span className="hidden md:inline">
              Case Study
            </span>
          </a>
        </ActiveLink>
      </div>
    </nav>
  )
}