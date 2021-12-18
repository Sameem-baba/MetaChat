import Image from "next/image";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeProfile from "./ChangeProfile";

function Header() {
    const { user } = useMoralis();

    return (
        <div className={`sticky top-3 m-5 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 p-5 h-full rounded-xl shadow-2xl z-50 text-purple-500 border-b-2 border-purple-500`}>
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image
                        src="https://links.papareact.com/3pi"
                        layout="fill"
                        className="rounded-full"
                        objectFit="cover"
                    />
                </div>

                <div className="col-span-4 text-left lg:text-center">
                    <div className="relative h-48 w-48 lg:mx-auto border-purple-400 border-4 rounded-full">
                        <Avatar logoutOnpress profilePicture={user.get("profilePicture")}/>
                    </div>
                    <h1 className="font-alternate text-3xl">Welcome to the Metaverse</h1>

                    <h2 className="text-5xl font-pacifo truncate">
                        {user.getUsername()}
                    </h2>

                    <ChangeProfile />
                </div>
            </div>
        </div>
    )
}

export default Header
