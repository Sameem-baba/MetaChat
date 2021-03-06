import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Messages from '../components/Messages';
import Modal from '../components/Modal';
import Modaluser from '../components/Modaluser';
import { parent, authVar, headerVar } from "../animations/indexVariants";
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import UserInfo from '../components/UserInfo';

export default function Home() {
  const { isAuthenticated, authError, userError } = useMoralis();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return;

    toast.success("You have entered the Metaverse!");
  }, [isAuthenticated]);

    useEffect(() => {
    if (!authError) return;

    toast.error(authError.message);
    }, [authError]);
  
  useEffect(() => {
    if (!userError) return;

    toast.error(userError.message);
    }, [userError]);
  
  if (!isAuthenticated) return <Login setModal={setModal} modal={modal} />;

  return (
    <div className="bg-gradient-to-b from-cyan-400 to-purple-900 overflow-y-scroll overflow-x-hidden scrollbar-thumb-violet-600 scrollbar-thin w-full overflow-hidden">
      <Head>
        <title>MetaChat</title>
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <div className="max-w-screen-2xl mx-auto">
        <AnimatePresence exitBeforeEnter>
          <div className='h-screen '>
            <motion.div
              variants={authVar}
              initial='hidden'
              animate='show'
              exit='bye'
              className='max-w-screen-2xl mx-auto relative'
            >
              <motion.div
                className='h-full sticky top-0 z-40'
                variants={headerVar}
              >
                <Header />
              </motion.div>

              <Messages />
            </motion.div>
          </div>
        </AnimatePresence>


        <Modaluser />
        
        <Modal />

        {/*<Sidebar />*/}
          
      </div>
    </div>
  )
}
