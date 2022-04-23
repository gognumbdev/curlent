/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, UserCircleIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CurlentBigLogo from "../public/logo/CurlentBig.png"
import Image from "next/image"

{/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfwolAaPkgpsAyeI8AOPK2-8fndpzEqw5JoD2S28PihkM2zCQ/viewform?embedded=true" width="640" height="1083" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
const navigation = [
  { name: 'Product', href: 'Products', current: false,},
  { name: 'Developer', href: 'Developers', current: false,},
  { name: 'Pricing', href: 'Pricing', current: false,},
  { name: 'Blog', href: 'Pricing', current: false,},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const router = useRouter();
    const {username,publicAddress} = useSelector(state => state.supplier)
    const {uid,firstName,lastName,businessName,email,receiveEmail,verified} = useSelector(state => state.user)
    
    const goToPage = (page) => {
        switch(page) {
            case "Product":
              router.push('/products/');
              break;
            case "Developer":
              router.push('/docs/');
              break;
            case "Pricing":
              router.push('/pricing');
              break;
            case "Blog":
              router.push('/blog/');
              break;
            case "Sign In":
              router.push('/auth/signin');
              break;
            default:
                router.push('/');
                break;    
        }
  }

  return (
    <Disclosure as="nav" className="fixed top-0 bg-white shadow w-full z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

                {/* Left side */}
              <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-start h-full">
                
                <Image
                    className='cursor-pointer'
                    src={CurlentBigLogo}
                    layout="intrinsic" objectFit="contain"
                    width={100} height={100}
                    onClick={() => router.push("/")}
                />
                
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                          <a
                          key={item.name}
                          onClick={() => goToPage(item.name)}
                          className={classNames(
                            item.current ? 'font-bold' : 'text-black  font-bold',
                            'px-3 py-2 rounded-md cursor-pointer'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))
                    }
                  </div>
                </div>
              </div>
                
            {/* Authentication */}
            <div className='flex space-x-4'>
                {/* Signin */}
                <button 
                    className='bg-blue-600 px-5 py-2 rounded text-white font-bold'
                    onClick={() => goToPage("Sign In")}
                >
                    Sign In
                </button>
            </div>
            
            
            

            {/* User profile */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
            type="button"
            className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
            <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button> */}

            {/* Profile dropdown */}
            <Menu as="div" className="ml-3 relative">
            {/* <div>
                <Menu.Button className="flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
                transition duration-200 ">
                <span className="sr-only">Open user menu</span>
                    <UserCircleIcon className='h-10' />
                </Menu.Button>
            </div> */}
            
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                    {({ active }) => (
                    <a href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-gray-700')}
                      onClick={goToBusinessDashboard}
                      >
                        {businessName}
                    </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                    <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-gray-700 cursor-pointer')}>
                      Settings
                    </a>)}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                    <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-gray-700 cursor-pointer')}
                      onClick={signUserOut}>
                        Sign out
                    </a>
                    )}
                </Menu.Item>
                </Menu.Items>
            </Transition>
            </Menu>
        </div>
            

              
            </div>
          </div>

        </>
      )}
    </Disclosure>
  )
}