import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/Toaster";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
    title: "Rebbit",
    description: "A Reddit clone built with Next.js and TypeScript.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, authModal }: { children: React.ReactNode; authModal: React.ReactNode }) {
    return (
        <html
            lang='en'
            className={cn("bg-white text-slate-900 antialiased light", inter.className)}>
            <body className='bg-slate-50 min-h-screen pt-12 antialiased'>
                <Providers>
                    {/* @ts-expect-error Server Component */}
                    <NavBar />
                    {authModal}

                    <div className='max-w-7xl container h-full pt-12 mx-auto'>{children}</div>
                </Providers>
                <Toaster />
            </body>
        </html>
    );
}
