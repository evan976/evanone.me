import { CodeIcon, GithubIcon, RssIcon } from 'components/icons'

export default function Footer() {
  return (
    <footer className="mb-16 max-w-4xl mx-auto">
      <ul className="mt-8 flex text-subtitle space-x-6">
        <li>
          <a
            className="transition-all"
            rel="noopener noreferrer"
            target="_blank"
            title="RSS"
            href="/rss"
          >
            <RssIcon />
          </a>
        </li>
        <li>
          <a
            className="transition-all"
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub"
            href="https://github.com/wujihua118"
          >
            <GithubIcon />
          </a>
        </li>
        <li>
          <a
            className="transition-all"
            rel="noopener noreferrer"
            target="_blank"
            title="View Source"
            href="https://github.com/wujihua118/Blog"
          >
            <CodeIcon />
          </a>
        </li>
      </ul>
      <p className="mt-8 text-sm">
        &copy; {new Date().getFullYear()} Evan. All rights reserved.
      </p>
    </footer>
  )
}
