"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface LayoutProps {
    children: ReactNode;
}

const queryClient = new QueryClient();

const Providers: FC<LayoutProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <SessionProvider>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </SessionProvider>
        </QueryClientProvider>
    );
};

export default Providers;
