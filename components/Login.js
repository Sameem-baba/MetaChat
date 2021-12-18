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

    const logup = async () => {
        await signup(emailRef.current.value, passwordRef.current.value, emailRef.current.value)
            .then(() => { })
            .catch(error => alert(error.message))
    }

    const signIn = async () => {
        await login(emailRef.current.value, passwordRef.current.value)
            .then(() => { })
            .catch((error) => alert(error.message))
    }

    return (
        <div
            className="bg-[#021b39] transition-all duration-700 ease-in-out relative"
        >  
            <Particles params={Config} className="w-full h-screen z-0" />
            <div className="absolute flex flex-col mx-auto max-w-md bg-clip-padding my-20 rounded-2xl shadow-2xl inset-0 backdrop-filter backdrop-blur-xl bg-opacity-60 items-center justify-center space-y-4">
                <motion.div className="" initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },

                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: .8,
                        }
                    }
                }}>
                    <Image
                        src="https://links.papareact.com/3pi" 
                        className="object-cover rounded-full"
                        height={200}
                        width={200}
                    />
                </motion.div>
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

                <p className="font-semibold text-white text-xl">
                    Don't Have A Wallet? <a href="https://metamask.io/" className="font-light border-b cursor-pointer">Click here</a>
                </p>
            </div>
        </div>
    )
} 

export default Login;