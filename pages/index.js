import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="flex flex-row flex-nowrap">
      <Head>
        <title>Spotify Profile</title>
        <link rel="icon" href="/spotify.svg" />
      </Head>

      <Sidebar />
      <main className="bg-sp-black w-[100%]">
      </main>
    </div>
  )
}
