import { ReactNode } from "react";
import './global.css';
export const metadata = {
    title: " Hari's next app for studying",
    description: "this is an app created by Hari to learn next js ",
}

export default function RootLayout({children}: {children:ReactNode}){
    return(
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}