import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="icon" href="favicon.svg" type="image/svg+xml" />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body className="bg-[#230d2e] font-Exo text-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
