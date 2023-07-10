import { Icons } from "./Icons";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

const SignIn = () => {
    return (
        <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
            <div className='flex flex-col space-y-2 text-center'>
                <Icons.logo className='w-12 h-12 mx-auto' />
                <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
                <p className='max-w-xs mx-auto text-sm'>
                    By continuing, you are setting up a Breadit account and agree to our User Agreement and Privacy Policy.
                </p>
            </div>
            <UserAuthForm />
            <p className='text-muted-foreground px-8 text-sm text-center'>
                New to Rebbit?
                <Link
                    href='/sign-up'
                    className='hover:text-brand underline-offset-4 mx-1 text-sm font-semibold underline'
                    replace>
                    Sign Up
                </Link>
            </p>
        </div>
    );
};

export default SignIn;
