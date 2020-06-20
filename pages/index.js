import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
      </section>
    </Layout>
  );
}

// import Head from "next/head";

// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <h1 className="title">
//         Welcome to <a href="https://nextjs.org">Next.js!</a>
//       </h1>
//       <Link href="posts/first-post">
//         <a>post</a>
//       </Link>

//       <Link href="/About">
//         <a>About</a>
//       </Link>

//     </div>
//   );
// }
