import Image from "next/image";
import { useMoralis } from "react-moralis";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Loader from "./Loader";
import SignIn from "./SignIn";
import { parent, child, modalParent } from "../animations/loginVariants";
import Head from "next/head";

const Login = ({ modal, setModal }) => {
  const { authenticate, isAuthenticating } = useMoralis();
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [reveal, setReveal] = useState(false);

  const [isSignIn, setIsSignIn] = useState(true);
  const [metaverse, setMetaverse] = useState("METAVERSE");

  const headTitle = Array.from(metaverse);

  const getSequence = useCallback(() => {
    setTrigger(true);

    setTimeout(() => {
      setReveal(true);
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Metachat - Login</title>
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <AnimatePresence>
        {!trigger && (
          <div className='absolute inset-0 z-50 flex items-center justify-center'>
            <motion.div layoutId='avatar'>
              <Image
                className='object-cover rounded-full'
                src='https://i.imgur.com/mEWrdvi.png'
                height={360}
                width={360}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence exitBeforeEnter>
        {!loaded && <Loader key='loader' getSequence={getSequence} />}
      </AnimatePresence>

      <div className='bg-black relative '>
        <div className='flex flex-col absolute z-30 h-[100%] items-center justify-center w-full space-y-8'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.7 }}
            className='flex flex-col overflow-hidden border-l-4 select-none border-l-[#efab2c] py-2 md:py-3 px-4'
          >
            <motion.h1
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ delay: 3.8 }}
              className='text-white text-lg md:text-4xl font-extrabold tracking-widest leading-3'
            >
              ENTER THE
            </motion.h1>
            <motion.div
              variants={parent}
              initial='from'
              animate='to'
              className='flex overflow-hidden text-white hover:text-[#efab2c]'
            >
              {headTitle.map((char, i) => {
                return (
                  <motion.div
                    variants={child}
                    className='text-4xl md:text-8xl font-extrabold transition duration-150'
                    key={i}
                  >
                    {char}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          <div className='h-48 w-48'>
            <AnimatePresence>
              {trigger && (
                <motion.div
                  layoutId='avatar'
                  className='overflow-hidden w-48 h-48 rounded-full'
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{
                      scale: hovered ? 1.2 : 1,
                      rotate: hovered ? -10 : 0,
                    }}
                    className='w-full h-full rounded-full'
                  >
                    <Image
                      className='object-cover rounded-full'
                      src='https://i.imgur.com/mEWrdvi.png'
                      height={192}
                      width={192}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className='relative group'
          >
            <motion.div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-500 group-hover:duration-500' />
            <motion.div
              initial={{ opacity: 0, scale: 5 }}
              animate={{ opacity: reveal ? 1 : 0, scale: reveal ? 1 : 5 }}
              className='flex flex-col space-y-4 overflow-hidden w-full h-full relative'
            >
              <motion.button
                disabled={isAuthenticating}
                onClick={() => authenticate()}
                whileTap={{ scale: !isAuthenticating ? 0.98 : 1 }}
                className={`${
                  isAuthenticating ? "" : ""
                } relative p-4 rounded-lg inline-flex flex-row items-center cursor-pointer justify-center text-black bg-[#efab2c] text-lg font-bold space-x-2`}
              >
                <span className='hover' />
                <span>
                  <svg
                    width='100%'
                    height='100%'
                    className='rotate-180 w-6 h-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                    />
                  </svg>
                </span>
                <span className='label'>{`${
                  isAuthenticating
                    ? "Authenticate with your wallet"
                    : "Connect with a MetaMask"
                }`}</span>
              </motion.button>
              <motion.button
                disabled={isAuthenticating}
                onClick={() => authenticate({ provider: "walletconnect" })}
                whileTap={{ scale: !isAuthenticating ? 0.98 : 1 }}
                className={`${
                  isAuthenticating ? "" : ""
                } relative p-4 rounded-lg inline-flex flex-row items-center justify-center text-black bg-[#efab2c] text-lg font-bold space-x-2 cursor-pointer`}
              >
                <span className='hover' />
                <span>
                  <svg
                    width='100%'
                    height='100%'
                    className='rotate-180 w-6 h-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                    />
                  </svg>
                </span>
                <span className='label'>{`${
                  isAuthenticating
                    ? "Authenticate with your wallet"
                    : "Connect with a Wallect Connect"
                }`}</span>
              </motion.button>
            </motion.div>
          </div>

          <div
            className='text-white text-right'
          >
            <p>Don't have a wallet?</p>
            <p
              className='font-bold hover:text-[#efab2c] text-sm underline cursor-pointer leading-3'
              onClick={() => setModal(true)}
            >
              Sign in with email and password
            </p>
          </div>
        </div>

        <div className='w-full h-screen relative overflow-hidden'>
          <Image
            src='https://images.unsplash.com/photo-1527409335569-f0e5c91fa707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            layout='fill'
            objectFit='cover'
          />
          <div className='animate-noise noise absolute top-0 left-0 w-full h-full' />
        </div>
      </div>

      <AnimatePresence exitBeforeEnter>
        {modal && (
          <motion.div
            variants={modalParent}
            initial='from'
            animate='to'
            exit='exit'
            className='fixed top-0 bottom-0 left-0 right-0 z-40 bg-black backdrop-blur bg-opacity-50'
          >
            <SignIn
              setModal={setModal}
              isSignIn={isSignIn}
              setIsSignIn={setIsSignIn}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;