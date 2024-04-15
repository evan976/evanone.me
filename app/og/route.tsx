import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || 'Evan\'s Blog'

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)'
        }}
      >
        <div tw="flex flex-col w-full py-12 px-4 items-center justify-center p-8">
          <h2
            tw="text-4xl font-bold tracking-tight text-center"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {title}
          </h2>
          <p
            tw="font-medium"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            @evanone.me
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
