import Head from 'next/head'

export default function MetaTags({ url, title, description, img }) {
  
  const basePath = "https://nizarbaihaqi.com"

  const defaultOpt = {
    defaultTitle: "Nizar Baihaqi",
    defaultDesc: "Being a Frontend developer is being a fulltime learner, sometime design website, sometime creating website and sometime learning new Javascript framework.",
    defaultImg: "/share/default.svg",
  }

  const option = {
    title: title ? `${title} - ${defaultOpt.defaultTitle}` : defaultOpt.defaultTitle,
    desc: description || defaultOpt.defaultDesc,
    url: `${basePath}/${url || ''}`,
    img: `${basePath}${img || defaultOpt.defaultImg}`
  }

  return (
    <Head>
      {/* Global */}
      <title>{option.title}</title>
      <meta name="apple-mobile-web-app-title" content={option.title} />
      <meta name="description" content={option.desc} />
      <meta name="keywords" content="nizar, baihaqi, frontend, website, developer, indonesia, react, reactjs, vue, vuejs" />
      <meta name="author" content="Nizar Baihaqi" />
      <meta name="publisher" content="Nizar Baihaqi" />
      <meta name="theme-color" content='#C8FFFF' />
      <meta name="color-scheme" content='light' />
      
      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={option.title}/>
      <meta name="google-site-verification" content="cKGmdlxFixAj5un3xVbpDZ0nn_Fprvr2Xh6S7qjiFP4" />
      <meta itemProp="description" content={option.desc}/>
      <meta itemProp="image" content={option.img}/>

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={option.title}/>
      <meta property="og:description" content={option.desc}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={option.url}/>
      <meta property="og:image" content={option.img}/>
      <meta property="og:image:width" content={1200}/>
      <meta property="og:image:height" content={1200}/>
      <meta property="og:site_name" content="Nizar Baihaqi"/>
      <meta property="og:locale" content={'en_US'}/>

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@abaihaaqi"/>
      <meta name="twitter:creator" content="@abaihaaqi"/>
    </Head>
  )
}
