import Head from 'next/head'

export default function MetaTags({ url = '', title, description, img }) {
  const basePath = "https://staging.nizarbaihaqi.com/"
  const defaultImg = `wave-portal.png`

  return (
    <Head>
      {/* Global */}
      <title>{title}</title>
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="description" content={description} />
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
      <meta itemProp="name" content={title}/>
      <meta itemProp="description" content={description}/>
      <meta itemProp="image" content={`${basePath}${img || defaultImg}`}/>

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={`${basePath}${url}`}/>
      <meta property="og:image" content={`${basePath}${img || defaultImg}`}/>
      <meta property="og:image:width" content={1200}/>
      <meta property="og:image:height" content={1200}/>
      <meta property="og:site_name" content="Nizar Baihaqi"/>
      <meta property="og:locale" content={'en_US'}/>

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@abaihaaqi"/>
      <meta name="twitter:creator" content="@abaihaaqi"/>
      <meta name="twitter:image" content={`${basePath}${img || defaultImg}`}/>
      <meta name="twitter:image:width" content={1200}/>
      <meta name="twitter:image:height" content={1200}/>
    </Head>
  )
}
