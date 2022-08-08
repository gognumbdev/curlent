import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import MetaMask from "../../public/icon/wallet/MetaMask.png"
import CoinbaseWallet from "../../public/icon/wallet/CoinbaseWallet.png"
import Image from "next/image"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}  

const cryptoWallets = [
  { name: 'MetaMask',code:"MetaMask" , image:MetaMask},
  { name: 'Coinbase Wallet',code:"Coinbase Wallet" , image:CoinbaseWallet},
]

export default function SelectCryptoWallet({setCryptoWallet}) {
  const [selected, setSelected] = useState(cryptoWallets[0])

  useEffect(() => {
    setCryptoWallet(selected.name);    
  }, [selected])

  return (
    <div className="w-72 my-4 shadow">
      <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className='w-full'>
          <Listbox.Label className="block text-lg font-medium text-gray-700">Select Crypto Wallet</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm cursor-pointer">
              <div className="flex items-center">
                <Image src={selected.image} height={30} width={30} objectFit="contain" className="flex-shrink-0 h-6 w-6 rounded-full" />
                <section className='flex-col'>
                    <p className="ml-3 block truncate">{selected.name}</p>
                    
                </section>
              </div>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            {open && (
                <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                    <Listbox.Options static className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {cryptoWallets.map((cryptoWallet,index) => (
                        <Listbox.Option
                        key={index}
                        className={({ active }) =>
                            classNames(
                            active ? 'bg-blue-100' : 'text-gray-900',
                            'cursor-pointer select-none relative py-2 pl-3 pr-9'
                            )
                        }
                        value={cryptoWallet}
                        >
                        {({ selected, active }) => (
                            <>
                            <div className="flex items-center">
                                <Image src={cryptoWallet.image} height={30} width={30} objectFit="cover" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                <section className='flex-col'>
                                    <p className="ml-3 block truncate ">{cryptoWallet.name}</p>
                                </section>
                            </div>
    
                            {selected ? (
                                <span
                                className={classNames(
                                    active ? 'text-gray-500' : 'text-blue-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                                >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                            ) : null}
                            </>
                        )}
                        </Listbox.Option>
                    ))}
                    </Listbox.Options>
                </Transition>
            )}
            
          </div>
        </div>
      )}
      </Listbox>
    </div>
  )
}