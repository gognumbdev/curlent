import React from 'react'

const TransactionSuccess = ({txResult,blockchain,href,bg,text,blockExplorer}) => {
  return (
    <div className='grid grid-cols-1'>
        <p className=' text-green-500 my-2'>Your Transaction on {blockchain} success !</p>
        <p className='mb-2'>to check your transaction info</p>
        {txResult && (
        <div>
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`p-2 my-2 border-2 rounded ${bg} ${text} shadow border-none font-medium`}
        >
            Open Tx Result in {blockExplorer}
        </a>
        </div>
        )}
    </div>
  )
}

export default TransactionSuccess