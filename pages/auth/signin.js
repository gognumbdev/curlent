import React, { useState } from 'react'
import Head from "next/head"
import Image from "next/image"
import CurlentBigLogo from "../../public/logo/CurlentBig.png"
import CurlentFullLogo from "../../public/logo/CurlentFull.png"
import InputField from '../../components/utils/InputField'
import { useRouter } from 'next/router'

const signin = () => {
  const router =useRouter();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return (
    <div className='grid grid-cols-1 w-full'>
        <Head>
            <title>Sign in</title>
        </Head>

        <div className='place-self-center w-6/12 '>
          <Image
              className='cursor-pointer'
              layout="fixed"
              src={CurlentBigLogo}
              objectFit="contain"
              width={200} height={200}
              onClick={() => router.push("/")}
          />
        </div>

        {/* Sign in Box */}
        <div className='shadow grid grid-cols-1 w-10/12 md:w-8/12 lg:w-4/12 place-self-center border-2 rounded p-14 space-y-8'>
          <h1 className='text-2xl sm:text-3xl font-bold text-blue-600'>
            Sign In
          </h1>

          <InputField title="Email" value={email} setValue={setEmail} />
          <InputField title="Password" value={password} setValue={setPassword} />
          <p className='text-blue-600 text-lg hover:text-black cursor-pointer transition transform duration-150 ease-out' >Forget your passowrd ?</p>

          <button className='text-xl font-medium border-2 w-6/12 place-self-center p-4 rounded bg-blue-500 text-white '>
            Continue
          </button>
          

          <p className='text-lg'>
            <span>Don't have an account ?</span>
            <span 
              className='text-blue-600 ml-2 hover:text-black cursor-pointer transition transform duration-150 ease-out' 
              onClick={() => router.push("/auth/signup")}
              >
              Sign Up
            </span>
          </p>
        </div>

    </div>
  )
}

export default signin