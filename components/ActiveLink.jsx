// See reference : https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.js

import { useRouter } from "next/router"
import Link from "next/link"
import PropTypes from 'prop-types'
import React, { Children, useEffect, useState } from "react"

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath, isReady } = useRouter()

  const child = Children.only(children)
  const childClassName = child.props.className || ''
  const [className, setClassName] = useState(childClassName)

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL(props.as || props.href, location.href)
        .pathname

      const activePathname = new URL(asPath, location.href).pathname

      const newClassName = 
        linkPathname === activePathname
          ? `${childClassName} ${activeClassName}`.trim()
          : childClassName
      
      if (newClassName !== className) {
        setClassName(newClassName)
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    childClassName,
    activeClassName,
    setClassName,
    className
  ])

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null
      })}
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired
}

export default ActiveLink
