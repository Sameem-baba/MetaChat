import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useRef, useState } from "react"
import { useMoralis } from "react-moralis";
import { useRecoilState } from "recoil";
import { modaluserState } from "../atoms/ModaluserAtom";

function Modaluser() {
    const [opel, setOpel] = useRecoilState(modaluserState)
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const { user, setUserData } = useMoralis();

    const updateUsername = () => {
        if (loading) return;

        setLoading(true);
        
        if (!username) return;

        setUserData({
            username,
        })

        setOpel(false);
        setLoading(false);
    }

    return (
        <Transition.Root show={opel} as={Fragment}>
            <Dialog
                as='div'
                className='fixed z-50 inset-0 overflow-y-auto '
                onClose={setOpel}
            >
                <div className='flex items-end justify-center 
                    min-h-[800px] sm:min-h-screen pt-4 
                    px-4 pb-20 text-center sm:block sm:p-0'
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opactiy-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay
                            className='fixed inset-0 bg-cyan-500 bg-opacity-50 transition-opacity'
                        />
                    </Transition.Child>

                    <span 
                        className='hidden sm:inline-block sm:align-middle sm:h-screen'
                        aria-hidden='true'
                    >
                        &#8230;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo='opacity-0 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className='inline-block align-bottom bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden
                        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6
                        '>
                            <div>
                                <div>
                                    <div className='mt-3 text-center sm:mt-5'>
                                        <Dialog.Title
                                            as='h3'
                                            className='text-md font-orbitron leading-6 font-bold text-gray-900'
                                        >
                                            Enter a username (current - {user?.getUsername()})
                                        </Dialog.Title>

                                        <div className='mt-2'>
                                            <input
                                                className='border-none outline-none text-white bg-transparent font-pacifo focus:ring-0 w-full text-center'
                                                type='text'
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                placeholder={`Enter your new Username`}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className='mt-5 sm:mt-6'>
                                    <button
                                        type='button'
                                        disabled={!username}
                                        className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4
                                        py-2 bg-gradient-to-tr from-cyan-400 to-purple-400 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2
                                        focus:ring-offset-2 focus:ring-purple-500 sm:text-sm disabled:bg-gray-300
                                        disabled:cursor-not-allowed disabled:hover:bg-gray-300'
                                        onClick={updateUsername}
                                        
                                    >
                                        {loading ? "Uploading..." : "Update Username"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modaluser
