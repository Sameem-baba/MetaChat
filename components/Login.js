import Image from "next/image";
import { useMoralis } from "react-moralis";
import { motion } from "framer-motion"
import Particles from "react-tsparticles";
import Config from "../assets/particle.json"
import Loader from "./Loader";

function Login() {
    const { authenticate } = useMoralis();

    return (
        <div
            className="bg-[#021b39] transition-all duration-700 ease-in-out relative"
        >  
            <Particles params={Config} className="w-full h-screen z-0" />
                <div className="absolute items-center w-full flex flex-col top-48 space-y-4">
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