import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/swiper-bundle.min.css'
import 'react-modal-video/css/modal-video.min.css'
import '../assets/css/animate.min.css'
import '../assets/css/azino-icons.css'
import '../assets/css/fontawesome-all.min.css'
import '../assets/css/main.css'
import 'swiper/swiper-bundle.min.css'
import Head from 'next/head'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {/* <title>{pageTitle}</title> */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href={AppleTouch} /> */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href={Fevicon32} /> */}
        {/* <link rel="icon" type="image/png" sizes="16x16" href={Fevicon16} /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <Component {...pageProps} />;
    </>
  )
}
