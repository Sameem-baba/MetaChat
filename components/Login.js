import Image from "next/image";
import { useMoralis } from "react-moralis";
import { motion } from "framer-motion"
import Particles from "react-tsparticles";
import Config from "../assets/particle.json"
import Loader from "./Loader";
import { useRef } from "react";

function Login() {
    const { authenticate, login, signup } = useMoralis();
    const emailRef = useRef();
    const passwordRef = useRef();

    return (
        <div
            className="bg-[#021b39] transition-all duration-700 ease-in-out relative"
        >  
            <Particles params={Config} className="w-full h-screen z-0" />
            <div className="absolute items-center w-full flex flex-col top-28 space-y-4">
                <motion.div className="" initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },

                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: .4,
                        }
                    }
                }}>
                    <Image
                        src="https://links.papareact.com/3pi" className="object-cover rounded-full"
                        height={200}
                        width={200}
                    />
                </motion.div>
                
                <div className='flex flex-col items-center '>
                    <div className='bg-gray-100 rounded-lg w-64 p-2 flex items-center mb-3'>
                        <input
                            ref={emailRef}
                            type="email"
                            placeholder='Email'
                            className='bg-gray-100 focus:outline-none flex-1'
                        />
                    </div>

                    <div className='bg-gray-100 rounded-lg w-64 p-2 flex items-center'>
                        <input
                            ref={passwordRef}
                            type="password"
                            name='password'
                            placeholder='Password' className='bg-gray-100 focus:outline-none flex-1'
                        />
                    </div>
                            
                    <div className='mt-3 flex flex-col space-y-4'>
                        <button
                            className='border-2 border-green-500 rounded-full px-12 py-2 inline-block text-white font-semibold hover:bg-yellow-500 hover:text-white'
                            type='submit'
                            onClick={() => login(emailRef, passwordRef)}
                        >
                            Sign In
                        </button>
                        <button
                            className='border-2 border-green-500 rounded-full px-12 py-2 inline-block text-white font-semibold hover:bg-yellow-500 hover:text-white'
                            type='submit'
                            onClick={() => signup(emailRef.current.value, passwordRef.current.value, emailRef.current.value)}
                        >
                            Sign Up Now
                        </button>
                    </div>
                </div>
                <button
                    className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse "
                    onClick={authenticate}
                >
                    Login to the METAVERSE with MetaMask
                </button>

                <button
                    className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
                    onClick={() => authenticate({provider: 'walletconnect'})}
                >
                    Login to the METAVERSE with Wallet Connect
                </button>
            </div>
        </div>
    )
} 

export default Login;