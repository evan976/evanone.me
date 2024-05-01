import Image from 'next/image'
import Link from 'next/link'

import { EmailIcon, GithubIcon } from 'components/icons'

export default function Profile() {
  return (
    <div className="bg-profile -mt-20 px-10 py-9 flex gap-9 shadow-[0px_2px_28px_0px_rgba(0,0,0,0.20)] rounded-[0.625rem]">
      <Image
        priority
        src="/profile.jpeg"
        width={148}
        height={148}
        alt="profile"
        className="rounded-lg"
      />
      <div className="flex flex-col justify-between">
        <h1 className="text-title text-2xl mt-1 font-bold">Evan</h1>
        <p className="text-text mt-2 mb-4">
          Chengdu China
          <br />
          Frontend Developer
          <br />
          Web Designer
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/wujihua118"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-blue"
          >
            <GithubIcon />
            <span className="text-sm">wujihua118</span>
          </Link>
          <Link
            href="mailto:jihua.evan@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-blue"
          >
            <EmailIcon />
            <span className="text-sm">jihua.evan@gmail.com</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
