import React from 'react';
import Image from 'next/image'
import {ClerkLoaded, ClerkLoading, SignIn} from "@clerk/nextjs";
import {Loader2} from "lucide-react";
import Logo from '@/images/logo.svg'
function Page() {
     return(

      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 ">
           <div className="h-full lg:flex flex-col items-center justify-center px-4">

       <div className="text-center space-y-4 pt-16">

            <h1 className="font-bold text-3xl text-">
                 Welcome Back !
            </h1>

            <p className="text-base text-">
            Log In or Create an account to get back to your dashboard
            </p>

       </div>
<div className="flex items-center justify-center">
     <ClerkLoaded>
          <SignIn path='/sign-in'/>
     </ClerkLoaded>
     <ClerkLoading>
          <Loader2 className="animate-spin text-muted-foreground"/>
     </ClerkLoading>

</div>

           </div>

           <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
               <Image src={Logo} height={100} width={100} alt="logo" />
           </div>
      </div>
  )
}

export default Page;