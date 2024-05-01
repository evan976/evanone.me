import Image from 'next/image'

export default function Logo() {
  return (
    <div className="bg-no-repeat bg-cover h-[18.5rem] flex flex-col items-center bg-center w-full bg-[url('/cover.svg')]">
      <Image
        src="/logo.svg"
        alt="logo"
        width={80}
        height={80}
        className="mt-16"
      />
      <h1 className="text-blue text-2xl font-medium">EVANONE.ME</h1>
    </div>
  )
}
