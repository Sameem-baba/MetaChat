import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import TimeAgo from 'timeago-react';
import { TrashIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { userInfoState } from "../atoms/UserInfoAtom";

function Message({ message }) {
    const { user } = useMoralis();
    const [open, setOpen] = useRecoilState(userInfoState);
    const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

    const deleteMessage = () => {
        const messageId = message.id
        
        message.destroy(messageId)
    }

    return (
        <div className={`flex group transition-all duration-500 ease-out items-center space-x-2 relative ${
            isUserMessage && 'justify-end'
            }`}>
            <div onClick={() => setOpen(true)}
                className={`relative h-8 w-8 ${
                isUserMessage && 'order-last ml-2'
                    }`}
            >
                <Avatar username={message.get("username")} profilePicture={message.get("profilePicture")}/>
            </div>
            <div className={`flex space-x-4 font-orbitron p-3 rounded-lg ${isUserMessage ? 'rounded-br-none bg-purple-400' : 'rounded-bl-none bg-cyan-400'}`}>
                <p>{message?.get("message")}</p>
            </div>
           
            {/* Time ago Stamp */}
            <TimeAgo
                className={`text-[10px] italic text-gray-400 ${isUserMessage && 'order-first'}`}
                datetime={message.createdAt}
            />

            <p className={`absolute -bottom-5 text-xs ${isUserMessage ? 'text-purple-400' : 'text-cyan-400'}`}>
                {message.get("username")}
            </p>

            <TrashIcon onClick={deleteMessage} className={`hidden ${isUserMessage && 'w-5 h-5 cursor-pointer hidden group-hover:inline-block order-first'}`}/>
        </div>
    )
}

export default Message
