import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/MonumentExtended-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/MonumentExtended-Ultrabold.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <body className="min-h-screen font-monumentExtended text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
