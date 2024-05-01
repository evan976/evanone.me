import skills from 'assets/skills.json'
import Image from 'next/image'
import Link from 'next/link'

export default function Skills() {
  return (
    <div className="flex items-center justify-between mt-12">
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
          />
        </Link>
      ))}
    </div>
  )
}
