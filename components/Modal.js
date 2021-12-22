import { Dialog, Transition } from "@headlessui/react";
import { CameraIcon } from "@heroicons/react/outline";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { Fragment, useRef, useState } from "react";
import { useMoralis } from "react-moralis";
import { useRecoilState } from "recoil"
import { ModalState } from "../atoms/ModalAtom"
import { storage } from "../firebase";

function Modal() {
    const [open, setOpen] = useRecoilState(ModalState);
    const filePickerRef = useRef(null);
    const { user, setUserData } = useMoralis();
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const uploadProfile = async() => {
        if (loading) return;

        setLoading(true);

        if (!selectedFile) return;

        const imageRef = ref(storage, `posts/image`);

        await uploadString(imageRef, selectedFile, 'data_url').then(async snapshot => {
            const downloadURL = await getDownloadURL(imageRef);
            await setUserData({
                profilePicture: downloadURL,
            })
        });

        setOpen(false);
        setLoading(false);
        setSelectedFile(null);
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };

        
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as='div'
                className='fixed z-50 inset-0 overflow-y-auto'
                onClose={setOpen}
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

                                    {selectedFile ? (

                                        <img
                                            src={selectedFile}
                                            className='w-full object-contain cursor-pointer'
                                            alt=''
                                            onClick={() => setSelectedFile(null)}
                                        />

                                    ): (
                                        <div
                                            onClick={() => filePickerRef.current.click()}
                                            className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100
                                            cursor-pointer'
                                        >
                                            <CameraIcon
                                                className='h-6 w-6 text-red-600'
                                                aria-hidden='true'
                                            />
                                        </div>    
                                    )}

                                    
                                    </div>
                                <div>
                                    <div className='mt-3 text-center sm:mt-5'>
                                        <Dialog.Title
                                            as='h3'
                                            className='text-lg leading-6 font-medium text-gray-900'
                                        >
                                            Upload a Photo
                                        </Dialog.Title>

                                        <div>
                                            <input
                                                ref={filePickerRef}
                                                type='file'
                                                hidden
                                                onChange={addImageToPost}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className='mt-5 sm:mt-6'>
                                    <button
                                        type='button'
                                        disabled={!selectedFile}
                                        className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4
                                        py-2 bg-gradient-to-tr from-cyan-400 to-purple-400 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2
                                        focus:ring-offset-2 focus:ring-purple-500 sm:text-sm disabled:bg-gray-300
                                        disabled:cursor-not-allowed disabled:hover:bg-gray-300'
                                        onClick={uploadProfile}
                                        
                                    >
                                        {loading ? "Uploading..." : "Update Profile Picture"}
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

export default Modal
