import React, { useState } from 'react'

const RouterEvent = () => {
  const [btnEventFlag, setBtnEventFlag] = useState(false)
  const [pushNum, setPushNum] = useState(0)

  const onClickBtnEvent = () => {
    setBtnEventFlag(!btnEventFlag)
    setPushNum(pushNum + 1)
  }
  return (
    <div className='flex flex-col border-b-2 p-2'>
      <div className='p-3'>
        <p>{btnEventFlag ? 'pushed.' : 'Please push!'}</p>
        <p className={`${btnEventFlag ? 'text-green-500' : ''}`}>
          Styleが変わる
        </p>
        <p>Push Num : {pushNum}</p>
        <button
          className='w-full bg-blue-300 p-2 hover:opacity-70'
          type='button'
          onClick={() => onClickBtnEvent()}
        >
          Push
        </button>
      </div>
    </div>
  )
}

export default RouterEvent

// http_proxy="http://0082651-z100:asn0082651@160.203.98.12:8080/"
// https_proxy="http://0082651-z100:asn0082651@160.203.98.12:8080/"

// Acquire::http::Proxy "http://0082651-z100:asn0082651@160.203.98.12:8080/";
// Acquire::https::Proxy "http://0082651-z100:asn0082651@160.203.98.12:8080/";

// proxy=http://0082651-z100:asn0082651@160.203.98.12:8080

// "proxies":{
//                 "default":{
//                         "httpProxy": "http://0082651-z100:asn0082651@160.203.98.12:8080",
//                         "httpsProxy": "http://0082651-z100:asn0082651@160.203.98.12:8080"
//                 }
//         },
