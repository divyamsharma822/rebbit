import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";

const NavBar = async () => {
    const session = await getAuthSession();

    return (
        <div className='h-fit bg-zinc-100 inset-x-0 border-zinc-300 fixed top-0 border-b z-[10] py-2'>
            <div className='max-w-7xl container flex items-center justify-between h-full gap-2 mx-auto'>
                {/* logo */}
                <Link
                    href='/'
                    className='flex items-center gap-2'>
                    <Icons.logo className='sm:w-8 sm:h-8 w-10 h-10' />
                    <p className='md:block text-md hidden font-medium text-black'>Rebbit</p>
                </Link>

                {/* actions */}
                {session?.user ? (
                    <UserAccountNav user={session.user} />
                ) : (
                    <Link
                        href='/sign-in'
                        className={buttonVariants()}>
                        Sign In
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
