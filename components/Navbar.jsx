import Image from "next/image";
import Link from "next/link";
import { navbarContainer, navbarLink } from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={navbarContainer}>
      <div>
        <Link href="/">
          <a className={navbarLink}>
            <Image src="/favicon-32x32.png" width={32} height={32} alt="Logo Nizar Baihaqi" />
            <span className="hidden">
              Nizar Baihaqi
            </span>
          </a>
        </Link>
      </div>
      <div className="flex">
        <Link href={'/work'}>
          <a className={navbarLink}>Works</a>
        </Link>
        <Link href={'/me'}>
          <a className={navbarLink}>Me</a>
        </Link>
      </div>
    </nav>
  )
}