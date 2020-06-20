import Head from "next/head";
import Link from "next/link";
// import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";

const name = "Nobuyuki";
export const siteTitle = "Knob's Website by Nextjs";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/logo_circle_fav.png" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={utilStyles.headerContainer}>
        {home ? (
          // HOMEだったとき
          <>
            <img
              src="/logo_circle.png"
              className={`${utilStyles.headerLogoL}`}
              alt="siteLogo"
            />
            <h1 className={utilStyles.headingXl}>{siteTitle}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/logo_circle.png"
                  className={`${utilStyles.headerLogoM}`}
                  alt="siteLogo"
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{siteTitle}</a>
              </Link>
            </h2>
            <p>HOMEではない場合</p>
          </>
        )}
      </header>
        <nav>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <Link href="posts/first-post">
                <a>post</a>
              </Link>
            </li>
            <li className={utilStyles.listItem}>
              <Link href="/About">
                <a>About</a>
              </Link>
            </li>
            <li className={utilStyles.listItem}>まだ</li>
          </ul>
        </nav>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
