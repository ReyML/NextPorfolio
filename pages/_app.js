import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="wVGlPSMd7EXhVRJL6osOpvRL-93PHJlhqmWnbVk21H8" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/public/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-205578145-1">
      </script>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          {
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "Reynol Martinez",
            "image": "https://reyml.com/img/log.jpeg",
            "givenName": "Reyml",
            "url": "https://www.reyml.com",
            "gender": "male",
            "nationality": "Cuba",
            "sameAs": [
              "https://www.instagram.com/qwertyloyaluser/",
              "https://t.me/Musashi_M",
              "https://twitter.com/reyml10",
              "https://github.com/ReyML"
            ]
          }
        )
      }} />
      < Component {...pageProps} />
    </>
  )
}

export default MyApp


