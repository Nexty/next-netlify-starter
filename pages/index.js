import Head from 'next/head'
import { fetchEntries } from '@utils/cmsPosts'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Post from '@components/Post'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
              </p>

              <div className="posts">
                  {posts.map((p) => {
                      return <Post key={p.title} title={p.title} />
                  })}
              </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
    const res = await fetchEntries()
    const posts = await res.map((p) => {
        return p.fields
    })

    return {
        props: {
            posts,
        },
    }
}