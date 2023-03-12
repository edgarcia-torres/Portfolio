import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SEO = () => {
  const router = useRouter();

  const title = "Edgar Garcia Fullstack Developer";
  const description =
    "Edgar Garcia Fullstack Developer. ";
  const keywords = "Front end developer | Wordpress |Next.js";

  const image = "featuredImage.png";
  const domain =
    process.env.NODE_ENV === "production"
      ? "https://www.sumukhakb210.in/"
      : "http://localhost:3000/";
  const formattedTitle = title;
  const url = router.pathname === "/" ? "/" : router.pathname;
  const canonical = url && url === "/" ? domain : domain + url;
  const featuredImage = domain + image;
  const date = new Date().toDateString();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />

        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {description && <meta content={description} name="description" />}
        {keywords && <meta content={keywords} name="keywords" />}
        <meta content="follow, index" name="robots" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/favicons/browserconfig.xml"
          name="msapplication-config"
        />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {url && <link href={canonical} rel="canonical" />}
        <meta content="en_US" property="og:locale" />
        <meta content={formattedTitle} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={canonical} property="og:url" />
        <meta content="5e41b2275db646a5" name="yandex-verification" />
        <meta
          content="t28Kl2fGmZjIEgh6q3mGsf-7gGb8115VMQm1qbMMIKc"
          name="google-site-verification"
        />
        {featuredImage && (
          <>
            <meta content={featuredImage} property="og:image" />
            <meta content={description} property="og:image:alt" />
          </>
        )}
        {date && (
          <>
            <meta content="article" property="og:type" />
            <meta content={date} property="article:published_time" />
          </>
        )}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@Edgar Garcia" name="twitter:site" />
        <meta content="@Edgar David Garcia Torres" name="twitter:creator" />
      </Head>
    </>
  );
};

export default SEO;
