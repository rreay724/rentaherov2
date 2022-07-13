import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className="grid h-[40rem] place-items-center  bg-[url('/img/bat-signal.jpeg')] bg-cover lg:h-[50rem]">
      <h2 className="w-[20rem] px-8 text-center text-xl font-bold text-white md:w-[40rem] lg:w-full">
        For customer service, please contact Commisioner Gordon at 703-555-5555.
        Our CSR rep, Batman, will be in touch with you ASAP.
      </h2>
    </div>
  )
}

export default Contact
