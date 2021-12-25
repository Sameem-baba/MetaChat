import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { useRecoilState } from "recoil";
import { typingState } from "../atoms/TypeAtom";
import { motion } from "framer-motion";


function SendMessage({ endofMessagesRef }) {
    const { user, Moralis } = useMoralis();
    const [otherUserTyping, setOtherUserTyping] = useRecoilState(typingState);
    const [message, setMessage] = useState("");
    const [openEmo, setOpenEmo] = useState(false);
    const [emojis, setEmojis] = useState([
    "😀",
    "🥳",
    "🙌",
    "🤝",
    "🚀",
    "😎",
    "❤️",
  ]);
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

    useEffect(() => {
        subscribeToTyping()
    }, [])

    const onChangeText = (e) => {
        setMessage(e.target.value);
        Type(user.id)
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

        setOtherUserTyping(false);
    }

    useEffect(() => {
        setTimeout(() => {
            stopTyping();
        }, 5000)
    }, [otherUserTyping]);

    return (
        <form className='flex w-11/12 fixed bottom-10 bg-[#27252F] backdrop-blur bg-opacity-40 px-6 py-3 rounded-full max-w-2xl shadow-xl'>
            <div className='relative w-full h-full flex'>
                {openEmo && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        style={{ originX: 0, originY: 1 }}
                        className='flex absolute -top-16 bg-pink-500 backdrop-blur bg-opacity-50 p-2 space-x-4 rounded-xl'
                    >
                        {emojis.map((emoji, i) => {
                        return (
                            <div
                            onClick={() => {
                                setMessage(emoji);
                                setOpenEmo(false);
                            }}
                            className='text-lg'
                            key={i}
                            >
                            {emoji}
                            </div>
                        );
                        })}
                    </motion.div>
                )}

                <div className='absolute -left-6 -right-6 -top-3 -bottom-3 bg-gradient-to-r from-[#cd2ed3] to-purple-600 rounded-full blur opacity-20 group-hover:opacity-100 transition duration-500 group-hover:duration-500 z-20' />
                <button
                onClick={() => setOpenEmo(!openEmo)}
                type='button'
                className='font-bold text-pink-500 z-50'
                >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                >
                    <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z'
                    clipRule='evenodd'
                    />
                </svg>
                </button>

                <input
                placeholder={`Enter a Message ${user?.getUsername()}...`}
                className='flex-grow outline-none bg-transparent text-white placeholder-gray-400 pr-5 pl-2 z-50'
                type='text'
                value={message}
                onChange={onChangeText}
                />
                <button
                type='submit'
                onClick={sendMessage}
                className='font-bold text-pink-500 z-50'
                >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                >
                    <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z'
                    clipRule='evenodd'
                    />
                </svg>
                </button>
            </div>  
        </form>
    )
}

export default SendMessage
