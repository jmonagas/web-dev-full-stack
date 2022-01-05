import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta lang="en" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:locale" content="en_US" key="og:locale" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content="https://web-development-jmonagas.ml" key="og:url" />
        <meta property="og:site_name" content="Web Development By J. Monagas: Digital Marketing, Full Stack" key="og:site_name" />
        <meta property="og:title" content="Web Development By J. Monagas: Digital Marketing, Full Stack" key="og:title" />
        <meta property="og:description" content="Web Development By J. Monagas Introduces An Unpretentious & Creative Approach To Full Stack Web Projects Accessible In English & Spanish To A Broader Audience" key="og:description" />
        <meta property="og:image" content="https://lh5.googleusercontent.com/p/AF1QipO15mXIhVYWomfFJnew3tH5E1EFayVWXE_1HAk-=s1280-k-no" key="og:image" />
        <meta property="og:image:alt" content="Logo: Full Stack Web Development By J. Monagas" key="og:image:alt" />
        <meta property="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta property="twitter:site" content="https://web-development-jmonagas.ml" key="twitter:site" />
        <meta property="twitter:title" content="Full Stack Web Development By J. Monagas" key="twitter:title" />
        <meta property="twitter:description" content="Web Development By J. Monagas Introduces An Unpretentious & Creative Approach To Full Stack Web Projects Accessible In English & Spanish To A Broader Audience" key="twitter:description" />
        <meta property="twitter:image" content="https://lh5.googleusercontent.com/p/AF1QipO15mXIhVYWomfFJnew3tH5E1EFayVWXE_1HAk-=s1280-k-no" key="twitter:image" />
        <meta property="twitter:image:alt" content="Logo: Full Stack Web Development By J. Monagas" key="twitter:image:alt" />
        <meta name="language" content="en-us" key="language" />
        <meta name="rating" content="General" key="rating" />
        <meta name="distribution" content="Global" key="distribution" />
        <meta name="classification" content="web, app, development, frontend, backend, full-stack, digital, marketing" key="classification" />
        <meta name="robots" content="index, follow, notranslate" key="robots" />
        <meta name="author" content="Web Development By J. Monagas" key="author" />
        <meta name="creator" content="Jose G. Monagas, Web Developer Full Stack, Calgary AB Canada" key="creator" />
        <meta name="publisher" content="Web Development By J. Monagas, Web Projects in English and Spanish" key="publisher" />
        <meta name="copyright" content="Jose G. Monagas, Web Developer Full Stack, Calgary AB Canada" key="copyright" />
        <link rel="canonical" type="canonical" href="https://web-development-jmonagas.ml" />
        <link rel="shortcut icon" href="/jmonagas_webdev_logo.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
