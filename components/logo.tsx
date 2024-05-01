import Image from 'next/image'

export default function Logo() {
  return (
    <div className="bg-no-repeat sm:bg-cover bg-contain h-[18.5rem] flex flex-col items-center bg-center w-full bg-[url('/cover.svg')]">
      <Image
        src="/logo.svg"
        alt="logo"
        width={80}
        height={80}
        className="sm:mt-16 mt-4 max-sm:w-10 max-sm:h-10"
      />
      <h1 className="text-blue sm:text-2xl text-lg font-medium">EVANONE.ME</h1>
    </div>
  )
}
