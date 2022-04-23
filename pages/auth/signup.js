import React, { useState } from 'react'
import Head from "next/head"
import Image from "next/image"
import CurlentBigLogo from "../../public/logo/CurlentBig.png"
import InputField from '../../components/utils/InputField'
import { useRouter } from 'next/router'

const Signup = () => {
    const router = useRouter()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [fullName,setFullName] = useState("")
    const [checkboxValue,setCheckboxValue] = useState(false)
  return (
    <div className='grid grid-cols-1 w-full'>
        <Head>
            <title>Sign Up</title>
        </Head>

        <div className='place-self-center w-6/12 flex items-center justify-around'>
          <Image
              className='cursor-pointer'
              layout="fixed"
              src={CurlentBigLogo}
              objectFit="contain"
              width={200} height={200}
              onClick={() => router.push("/")}
          />
          <p className='text-lg'>
            <span>Already have an account ?</span>
            <span 
              className='text-blue-600 ml-2 hover:text-black cursor-pointer transition transform duration-150 ease-out' 
              onClick={() => router.push("/auth/signin")}
              >
              Sign In
            </span>
          </p>
        </div>

        {/* Sign Up box */}
        <div className='shadow grid grid-cols-1 w-10/12 md:w-8/12 lg:w-4/12 place-self-center border-2 rounded p-14 space-y-8'>
          <h1 className='text-2xl sm:text-3xl font-bold text-blue-600'>
            Create Account
          </h1>

          <InputField title="Email" value={email} setValue={setEmail} />
          <InputField title="Password" value={password} setValue={setPassword} />
          <InputField title="Full Name" value={fullName} setValue={setFullName} />

          <div class="flex mt-6 items-center">
            <input type="checkbox" value={checkboxValue} onClick={() => setCheckboxValue(!checkboxValue)} />
            <span class="ml-2">I agree to the 
                <span className="ml-2 text-blue-600 text-lg hover:text-black cursor-pointer transition transform duration-150 ease-out">
                    privacy policy
                </span>
            </span>
        </div>

          <button className='text-xl font-medium border-2 w-6/12 place-self-center p-4 rounded bg-blue-500 text-white '>
            Continue
          </button>

        </div>

    </div>
  )
}

export default Signup