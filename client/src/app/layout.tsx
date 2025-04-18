// 'use client'
// import { useRouter } from 'next/navigation'
// import { useEffect, useState } from 'react'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const router = useRouter()
//   const [isValid, setIsValid] = useState(false)

//   useEffect(() => {
//     const token = sessionStorage.getItem('token')
//     // router.replace('/')
//     if (!token) {
//       router.replace('/')
//     } else {
//       setIsValid(true)
//     }
//   }, [])

//   // if (!isValid) {
//   //   return (
//   //   <html lang="en">
//   //     <body
//   //       className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//   //     >
//   //      <div>Loading...</div>
//   //     </body>
//   //   </html> 
//   //   );
//   // }

//   // return <>{children}</>
//   if (isValid) {
//     return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   )
//   }
//   else {
//     return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Home/>
//        {/* <div>Loading...</div> */}
//       </body>
//     </html> 
//     );
//   }

// }
  