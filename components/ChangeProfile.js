import { useMoralis } from "react-moralis";
import { useRecoilState } from "recoil";
import { ModalState } from "../atoms/ModalAtom";
import { modaluserState } from "../atoms/ModaluserAtom";

function ChangeProfile() {
    const { isUserUpdating } = useMoralis();
    const [open, setOpen] = useRecoilState(ModalState);
    const [opel, setOpel] = useRecoilState(modaluserState);

    return (
        <div className="flex flex-col place-items-end space-y-4 text-sm absolute top-5 right-5 pr-3">
            <button disabled={isUserUpdating} onClick={() => setOpel(true)} className="bg-purple-500 px-2 py-4 rounded-lg text-white font-semibold  hover:bg-purple-400">
                Change Your Username
            </button>
            <button disabled={isUserUpdating} onClick={() => setOpen(true)} className="bg-purple-500 px-2 py-4 rounded-lg text-white font-semibold  hover:bg-purple-400">
                Change your Profile Picture
            </button>
        </div>
    )
}

export default ChangeProfile
