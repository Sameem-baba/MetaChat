import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnpress }) {
    const { user, logout } = useMoralis();

    const profilePicture = user.get("profilePicture");
    
    return (
        <div >
            <Image
                className="bg-black rounded-full cursor-pointer hover:opacity-75"
                src={profilePicture ? profilePicture : `https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`}
                onClick={() => logoutOnpress && logout()}
                layout="fill"
            />
        </div>
    )
}

export default Avatar
