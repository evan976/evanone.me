import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'
import * as React from 'react'
import { highlight } from 'sugar-high'

interface TableProps {
  data: {
    headers: string[]
    rows: string[][]
  }
}

function Table({ data }: TableProps) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))

  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

type CustomLinkProps = Omit<React.ComponentProps<typeof Link>, 'href'> & {
  href?: string
}

function CustomLink({ href, ...props }: CustomLinkProps) {
  if (href?.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href?.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage({ alt, ...props }: React.ComponentProps<typeof Image>) {
  return <Image alt={alt} className="rounded-lg" {...props} />
}


function Code({ children, ...props }: React.ComponentProps<'code'>) {
  const code = children?.toString()
  const codeHTML = highlight(code || '')
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: React.ReactNode) {
  return str
    ?.toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function createHeading(level: number) {
  const Heading = ({ children }: { children?: React.ReactNode }) => {
    const slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        })
      ],
      children,
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

const components: MDXRemoteProps['components'] = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  Image: RoundedImage,
  code: Code,
  Table,
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
