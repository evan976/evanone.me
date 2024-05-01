import { CodeIcon, GithubIcon, RssIcon } from 'components/icons'

export default function Footer() {
  return (
    <footer className="sm:mb-16 mb-12 max-w-4xl mx-auto max-sm:px-4">
      <ul className="mt-8 flex max-sm:justify-center text-subtitle space-x-6">
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
      <p className="sm:mt-8 mt-4 text-sm max-sm:text-center">
        &copy; {new Date().getFullYear()} Evan. All rights reserved.
      </p>
    </footer>
  )
}
