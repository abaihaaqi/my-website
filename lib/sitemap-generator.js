const fs = require("fs")
const path = require("path")
const globby = require("globby")
const matter = require("gray-matter")

const postsDirectory = path.join(process.cwd(), 'posts')

function toUrlTemplate(pathName) {

  const filteredPath = pathName.replace('pages', '')
    .replace('/index', '')
    .replace(/\.mdx$/, '')
    .replace(/\.jsx$/, '')

  const findProjectPath = filteredPath.match(/\/project\//)

  if(findProjectPath != null) {
    const filteredProjectPath = findProjectPath.input.replace(/\/project/, '')
    const fullPath = path.join(postsDirectory, filteredProjectPath + '.md')
    const postData = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(postData)

    return `
  <url>
    <loc>${`https://nizarbaihaqi.com${filteredPath}`}</loc>
    <lastmod>${data.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`
  } else {
    return `
  <url>
    <loc>${`https://nizarbaihaqi.com${filteredPath}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`
  }
}

async function generateSitemap() {
  const pageNames = await globby([
    'pages/**/*{.jsx,.mdx}',
    '!pages/_*.jsx',
    '!pages/api',
    '!pages/project/[id].jsx',
  ])
  
  const postsFileNames = fs.readdirSync(postsDirectory)
  const postNames = postsFileNames.map(fileName => {
    
    const id = fileName.replace(/\.md$/, '')
    
    const projectPath = `/project/${id}`

    return projectPath
  })

  const allPageNames = [...pageNames, ...postNames]

  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${allPageNames.map(toUrlTemplate).join('')}
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()
