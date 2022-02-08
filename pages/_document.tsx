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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="min-h-screen font-monumentExtended text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
