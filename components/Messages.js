import { useRef, useState } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'
import { useRecoilValue } from 'recoil';
import { typingState } from '../atoms/TypeAtom';
import Message from './Message';
import SendMessage from './SendMessage';
import UserInfo from './UserInfo';
const MINS_DURATION = 180;

function Messages() {
    const { user, Moralis } = useMoralis();
    const typing = useRecoilValue(typingState);
    const endofMessagesRef = useRef(null);
    const [messageid, setMessageid] = useState("");
    const [userdata, setUserdata] = useState([]);
    const { data, isLoading, error } = useMoralisQuery(
        'Messages',
        (query) =>
            query.ascending('createdAt')
                .greaterThan(
                    'createdAt', new Date(Date.now() - 1000 * 60 * MINS_DURATION)
                ),
        [],
        {
            live: true,
            onLiveDelete: (entity, all) => all.filter(e => e.id !== entity.id),
        }
    )

    const getUserInfo = async (messageid) => {
        const query = new Moralis.Query('Messages');
        query.equalTo("objectId", messageid);
        const results = await query.find();

        setUserdata(results);
    }

    console.log(userdata)

    return (
        <div className="pb-44">
            <div className="my-4">
                <ByMoralis
                    variant="dark"
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                />
            </div>

            <div className="space-y-10 p-4" >
                {data.map((message) => (
                    <div  onClick={() => getUserInfo(message.id)}>
                        <Message key={message.id} message={message}/> 
                    </div>
                ))}
                <UserInfo message={userdata} />
                {typing &&
                    <div
                        className={`flex items-center justify-center space-x-2 relative`}
                    >
                        <div className={`flex space-x-4 p-3 rounded-lg bg-sky-500`}>
                            <p>Someone is Typing <span className="animate-bounce font-bold">. . .</span></p>
                        </div>
                    </div>
                }
            </div>

            <div className="flex justify-center">
                <SendMessage endofMessagesRef={endofMessagesRef}/> 
            </div>

            <div ref={endofMessagesRef} className="text-center text-gray-400">
                <p>
                    You are upto date {user?.getUsername()}! 🎉
                </p>
            </div>
        </div>
    )
}

export default Messages
