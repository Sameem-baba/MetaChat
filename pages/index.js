import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis';
import Loader from '../components/Loader';

export default function Home() {
  const { isAuthenticated, logout, isInitializing, user } = useMoralis();


  if (!isAuthenticated) {
    return <Login />
  }

  if (isInitializing) {
    return <Loader />
  }

  return (
    <div className="h-screen">
      <Head>
        <title>Web 3.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center space-y-4 bg-black h-screen">
        <h1 className='text-white '>Welcome to the Metaverse, {user.get("username")}</h1>
        <buttton className="text-white bg-yellow-500 p-5 rounded-lg cursor-pointer" onClick={logout}>Logout</buttton>
      </main>
    </div>
  )
}
