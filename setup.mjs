import { promises as fs } from 'node:fs'
import path from 'node:path'

const template = `---
title: 'Hello World!'
publishedAt: ${new Date().toISOString().split('T')[0]}
summary: 'This is my first blog post!'
---

Hello World!
`

const homePage = `export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Hello</h1>
      <p className="text-sm">
        This is your new portfolio.
      </p>
    </section>
  )
}`

async function deleteFolderRecursive(path) {
  const stat = await fs.stat(path)
  if (stat.isDirectory()) {
    const files = await fs.readdir(path)
    await Promise.all(
      files.map((file) => deleteFolderRecursive(`${path}/${file}`))
    )
    await fs.rmdir(path)
  } else {
    await fs.unlink(path)
  }
}

(async () => {
  const blogsDir = path.join(process.cwd(), 'app', 'blog', 'posts')
  const imagesDir = path.join(process.cwd(), 'public', 'images')
  const appDir = path.join(process.cwd(), 'app')

  await deleteFolderRecursive(blogsDir)
  await deleteFolderRecursive(imagesDir)

  await fs.mkdir(blogsDir)

  await fs.writeFile(path.join(blogsDir, 'hello-world.mdx'), template)
  await fs.writeFile(path.join(appDir, 'page.tsx'), homePage)
})()
