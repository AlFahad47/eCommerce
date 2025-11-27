import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "LuxeSpace",
    description: "Modern Furniture eCommerce",
    icons: {
        icon: "/logo.jpg",

    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            <Navbar />
            {children}
            <Toaster position="top-center" richColors />
            <Footer />
        </Providers>
        </body>
        </html>
    );
}