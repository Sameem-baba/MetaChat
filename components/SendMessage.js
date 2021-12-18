import { useEffect, useState } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { useRecoilState } from "recoil";
import { typingState } from "../atoms/TypeAtom";
import { PaperAirplaneIcon } from "@heroicons/react/outline"


function SendMessage({ endofMessagesRef }) {
    const { user, Moralis } = useMoralis();
    const [otherUserTyping, setOtherUserTyping] = useRecoilState(typingState);
    const [message, setMessage] = useState("");
    const newUserTyping = new Moralis.Object("UserTyping");

    const sendMessage = async (e) => {
        e.preventDefault();

        if (!message) return;

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save
            ({
                message: message,
                username: user.getUsername(),
                ethAddress: user.get("ethAddress"),
                profilePicture: await user.get("profilePicture"),
            }).then(() => {

        },
            (error) => {
                console.log(error.message);
            }
        );

        endofMessagesRef.current.scrollIntoView({ behavior: "smooth" });

        setMessage("");
    }

    const subscribeToTyping = async () => {
        let query = new Moralis.Query('UserTyping');
        let subscription = await query.subscribe();
        subscription.on('create', notifyOnType);
        subscription.on('update', notifyOnType);
    }

    const notifyOnType = (result) => {
        setOtherUserTyping(result)
    }

    const Type = async (userId) => {
        const params = { userId: userId };
        const result = await Moralis.Cloud.run("getTypingUser", params);
        if (result.length > 0) {
            result[0].set('isTyping', true);
            result[0].save();
        } else {
            newUserTyping.set('userId', userId);
            newUserTyping.set('isTyping', true);
            newUserTyping.save();
        }
    }

    const stopTyping = () => {
        if (otherUserTyping && otherUserTyping.attributes.isTyping) {
            otherUserTyping.set('isTyping', false);
            otherUserTyping.save();
        }
    }

    const onChangeText = (e) => {
        setMessage(e.target.value);
        Type(user.id)
    }

    useEffect(() => {
        setTimeout(() => {
            stopTyping();
            setOtherUserTyping(false);
        }, 5000)
    }, [otherUserTyping]);

    useEffect(() => subscribeToTyping(), [])

    return (
        <form className='flex fixed bottom-10 bg-black opacity-80 py-2 px-4 w-11/12 max-w-2xl shadow-2xl rounded-full border-4 border-cyan-500'>
            <input
                className="outline-none bg-transparent flex-grow text-white pr-5"
                type="text"
                value={message}
                onChange={(e) => onChangeText(e)}
                placeholder={`Enter a Message ${user.getUsername()}...`}
            />

            <button
                type="submit"
                className="font-bold bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-full p-3 items-center"
                onClick={sendMessage}
            >
                <PaperAirplaneIcon className="h-5 w-5 hover:rotate-45 transition-all duration-300 ease-in-out"/>
            </button>
        </form>
    )
}

export default SendMessage
