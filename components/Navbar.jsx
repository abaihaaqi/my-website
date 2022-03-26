import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Factory, IdentificationCard, Palette } from "phosphor-react";
import { useEffect, useState } from "react";
import Button from "./Button";
import { navbarLink } from './Navbar.module.css'

export default function Navbar() {
  const router = useRouter()

  const [width, setWidth] = useState(0)

  function readWidth() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    readWidth();
  }, [])

  return (
    <nav className='mx-auto flex justify-between items-center md:bg-accent lg:rounded-lg  md:max-w-4xl absolute inset-x-0 z-20'>
      <div>
        <Link href="/">
          <a className={navbarLink}>
            <Image src="/icon/favicon-32x32.png" width={32} height={32} alt="Logo Nizar Baihaqi" />
            <span className="hidden md:inline">
              Nizar Baihaqi
            </span>
          </a>
        </Link>
      </div>
      <div className="flex">
        {/* <Link href={'/design'}>
          <a title="Design page" className={navbarLink}>{width > 500 ? 'Design' : <Palette size={32} />}</a>
        </Link> */}
        <Link href={'/project'}>
          <a title="Project page" className={navbarLink}>{width > 500 ? 'Project' : <Factory size={32} />}</a>
        </Link>
        <Link href={'/me'}>
          <a title="About me" className={navbarLink}>{width > 500 ? 'Me' : <IdentificationCard size={32} />}</a>
        </Link>
      </div>
      <div className={navbarLink}>
        <Button click={() => router.push('/case-study')}>
          Case Study
        </Button>
      </div>
    </nav>
  )
}