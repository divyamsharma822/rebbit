import CloseModal from "@/components/CloseModal";
import SignIn from "@/components/SignIn";
import { FC } from "react";

const page: FC = () => {
    return (
        <div className='bg-zinc-900/20 fixed inset-0 z-10'>
            <div className='container flex items-center h-full max-w-lg mx-auto'>
                <div className='h-fit relative w-full px-2 py-20 bg-white rounded-lg'>
                    <div className='top-4 right-4 absolute'>
                        <CloseModal />
                    </div>

                    <SignIn />
                </div>
            </div>
        </div>
    );
};

export default page;
