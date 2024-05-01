import Image from 'next/image'
import Link from 'next/link'

import skills from 'lib/skills.json'


export default function Skills() {
  return (
    <div className="flex items-center max-sm:px-4 sm:justify-between max-sm:justify-center gap-4 flex-wrap mt-12">
      {skills.map((skill) => (
        <Link
          key={skill.name}
          href={skill.url}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            priority
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.name}/${skill.name}-original.svg`}
            alt={skill.name}
            width={40}
            height={40}
            className="max-sm:w-6 max-sm:h-6"
          />
        </Link>
      ))}
    </div>
  )
}
