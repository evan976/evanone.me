import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'
import * as React from 'react'
import rehypeHighlight from 'rehype-highlight'

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

function RoundedImage({ alt, className, ...props }: React.ComponentProps<typeof Image>) {
  return <Image alt={alt} className={`rounded-lg ${className}`} {...props} />
}

function slugify(node: React.ReactNode) {
  if (typeof node === 'string') {
    // 中文或数字
    if (/^[\u4e00-\u9fa5\d]+$/.test(node)) {
      return node
    } else {
      return node
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/&/g, '-and-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
    }
  }

  if (typeof node === 'object' && node !== null && 'props' in node) {
    return slugify(node.props.children)
  }

  return node
}

function createHeading(level: number) {
  const Heading = ({ children }: { children?: React.ReactNode }) => {
    const slug = slugify(children)
    return React.createElement(
      `h${level}`,
      {
        id: slug,
        className: 'text-title',
      },
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
  Table,
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          development: process.env.NODE_ENV !== 'production',
          rehypePlugins: [
            // @ts-ignore
            rehypeHighlight,
          ]
        }
      }}
    />
  )
}
