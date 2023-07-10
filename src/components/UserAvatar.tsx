import { User } from "@prisma/client";
import { AvatarProps } from "@radix-ui/react-avatar";

import { Icons } from "@/components/Icons";
import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import Image from "next/image";

interface UserAvatarProps extends AvatarProps {
    user: Pick<User, "image" | "name">;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
    return (
        <Avatar {...props}>
            {user.image ? (
                <div className='aspect-square relative w-full h-full'>
                    <Image
                        fill
                        src={user.image}
                        alt='profile picture'
                        referrerPolicy='no-referrer'
                    />
                </div>
            ) : (
                <AvatarFallback className='active:outline-none focus:outline-none focus:border-none active:border-none'>
                    <span className='sr-only'>{user?.name}</span>
                    <Icons.user className='w-5 h-5' />
                </AvatarFallback>
            )}
        </Avatar>
    );
}
