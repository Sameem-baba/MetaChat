import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis';
import Loader from '../components/Loader';
import Authenticate from '../components/Authenticate';
import Header from '../components/Header';
import Messages from '../components/Messages';
import Modal from '../components/Modal';
import Modaluser from '../components/Modaluser';

export default function Home() {
  const { isAuthenticated, isInitializing, isAuthenticating } = useMoralis();


  if (isInitializing || isAuthenticating) {
    return <Loader />
  }
  
  if (!isAuthenticated) {
    return <Login />
  }

  

  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden scrollbar-thumb-violet-600 scrollbar-thin  bg-gradient-to-b from-cyan-400 to-purple-900 overflow-hidden">
      <Head>
        <title>Web 3.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <Header />

        {/* Messages */}
        <Messages />

        <Modal />

        <Modaluser />
      </div>
    </div>
  )
}
