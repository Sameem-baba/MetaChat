import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate } = useMoralis();

    return (
        <div
            className="bg-black relative"
        >
            <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
                <Image
                    src="https://links.papareact.com/3pi" className="object-cover rounded-full"
                    height={200}
                    width={200}
                />
                
                <button
                    className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
                    onClick={authenticate}
                >
                    Login to the METAVERSE
                </button>
            </div>

            <div className="w-full h-screen">
                <Image
                    src="https://links.papareact.com/55n" objectFit="cover"
                    layout="fill"
                />
            </div>
        </div>
    )
} 

export default Login;