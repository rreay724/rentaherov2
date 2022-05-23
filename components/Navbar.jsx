import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  return (
    <div className="sticky top-0 z-50 flex items-center justify-center bg-black-default px-10 py-5 text-white md:justify-between ">
      <div className="hidden md:flex">
        <h1 className="text-2xl font-bold md:visible">Rent-a-Hero</h1>
      </div>
      <div>
        <ul className="flex space-x-10">
          <li
            className="cursor-pointer text-lg transition duration-300 ease-in-out hover:text-gray-300"
            onClick={() => router.push('/')}
          >
            Home
          </li>
          <li
            onClick={() => router.push('/heroes')}
            className="cursor-pointer text-lg transition duration-300 ease-in-out hover:text-gray-300"
          >
            Heroes
          </li>
          <li className="cursor-pointer text-lg transition duration-300 ease-in-out hover:text-gray-300">
            About
          </li>
          <li className="cursor-pointer text-lg transition duration-300 ease-in-out hover:text-gray-300">
            Contact
          </li>
          <li className="cursor-pointer text-lg transition duration-300 ease-in-out hover:text-gray-300"></li>
          <li>
            <Link href="/cart" passHref>
              <div className="relative cursor-pointer">
                <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                <div className="absolute top-[-10px] right-[-10px] flex h-[20px] w-[20px] items-center justify-center rounded-lg bg-white p-[3px] font-bold text-black-default">
                  1
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
