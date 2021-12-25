import { useMoralis } from "react-moralis";
import { useRecoilState } from "recoil";
import { ModalState } from "../atoms/ModalAtom";
import { modaluserState } from "../atoms/ModaluserAtom";

function ChangeProfile() {
    const { isUserUpdating } = useMoralis();
    const [open, setOpen] = useRecoilState(ModalState);
    const [opel, setOpel] = useRecoilState(modaluserState);

    return (
        <div className="sm:flex flex-col hidden place-items-end space-y-4 text-sm absolute top-5 right-5 pr-3">
            <button disabled={isUserUpdating} onClick={() => setOpel(true)} className="bg-gradient-to-tr from-purple-600 to-cyan-500 shadow-2xl px-2 py-4 rounded-full text-white font-semibold  hover:bg-purple-400">
                Change Your Username
            </button>
            <button disabled={isUserUpdating} onClick={() => setOpen(true)} className="shadow-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 px-2 py-4 rounded-full text-white font-semibold  hover:bg-purple-400">
                Change your Profile Picture
            </button>
        </div>
    )
}

export default ChangeProfile
