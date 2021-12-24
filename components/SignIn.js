import Image from "next/image";
import { useMoralis } from "react-moralis";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { modalChild } from "../animations/loginVariants";

const SignIn = ({ isSignIn, setIsSignIn, setModal }) => {
  const { signup, user, login } = useMoralis();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (isSignIn) {
      if (user) return;
      await login(username, password);
      setModal(false);
      router.push("/");
    } else {
      signup(username, password, email);
      setModal(false);
      router.push("/");
    }
  };

  return (
    <motion.div
      variants={modalChild}
      className='w-4/5 md:max-w-[400px] min-h-min absolute top-20 md:top-60 left-0 right-0 mx-auto z-40 rounded-lg bg-[#27252F] shadow-lg border-4 border-[#efab2c]'
    >
      <div className='px-4 py-6 h-full flex flex-col items-center justify-around space-y-4 relative'>
        <div
          onClick={() => setModal(false)}
          className='absolute top-2 right-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            viewBox='0 0 20 20'
            fill='#efab2c'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='relative flex flex-col items-center justify-center'>
          <h1 className='text-white font-bold text-2xl mb-3'>{`${
            isSignIn ? "Sign In" : "Sign Up"
          }`}</h1>

          {isSignIn ? (
            <Image
              src='https://modernslave.io/wp-content/uploads/2021/12/bored-ape-yacht-club-nft-prices-catch-up-with-cryptopunks-1140x815.png'
              width={120}
              height={120}
              className='rounded-full mb-3'
            />
          ) : (
            <Image
              src='https://i.imgur.com/1BPEATG.png'
              width={120}
              height={120}
              className='rounded-full mb-3'
            />
          )}
        </div>

        <form
          onSubmit={onSubmit}
          className='flex flex-col space-y-2 w-11/12 md:w-3/4'
        >
          <input
            type='text'
            placeholder='Username'
            className='p-2 rounded-lg outline-none'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {!isSignIn && (
            <input
              type='email'
              placeholder='Email'
              className='p-2 rounded-lg outline-none'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}

          <input
            type='password'
            placeholder='Password'
            className='p-2 rounded-lg outline-none'
            email={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            className={` relative p-2 rounded-lg inline-flex flex-row items-center justify-center text-black bg-[#efab2c] text-lg font-bold space-x-2 cursor-none`}
          >
            <span className='hover' />
            <span>
              {isSignIn ? (
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
              ) : (
                <svg
                  width='100%'
                  height='100%'
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                  />
                </svg>
              )}
            </span>
            <span className='label'>{`${
              isSignIn ? "Sign In" : "Sign Up"
            }`}</span>
          </button>
        </form>

        <div className='flex space-x-2 text-gray-300 text-sm'>
          {isSignIn ? (
            <>
              <p>Don't have an account?</p>
              <p onClick={() => setIsSignIn(false)} className='underline'>
                Sign up here
              </p>
            </>
          ) : (
            <>
              <p>Already have an account?</p>
              <p onClick={() => setIsSignIn(true)} className='underline'>
                Sign in here
              </p>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SignIn;