import Image from "next/image";
import { css } from "@emotion/react";
import { ClipLoader } from 'react-spinners';

function Authenticate() {

     const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;
    return (
        <div className="flex bg-gradient-to-tr from-cyan-400 to-purple-400 h-screen flex-col items-center pt-16 justify-center space-y-5">
            <Image
                src="https://links.papareact.com/3pi"
                className="object-cover rounded-full"
                height={300}
                width={300}
            />

            <h1 className="font-bold text-3xl text-white">Authenticating <span className="animate-pulse">...</span></h1>
            
            <ClipLoader
                color={`#fff`}
                css={override}
                size={50}
            />
        </div>
    )
}

export default Authenticate
