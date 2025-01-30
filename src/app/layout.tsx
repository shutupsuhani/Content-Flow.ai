import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import {Outfit} from "next/font/google"

const inter=Outfit({subsets:["latin"]});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedOut>
           <SignInButton /> 
          </SignedOut>
           <SignedIn>
           
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}