import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  return (
    <div className="sticky top-0 z-[999] flex w-full items-center justify-between bg-black-default px-10 py-5 text-white ">
      <div>
        <h1 className="text-2xl font-bold">Rent-a-Hero</h1>
      </div>
      <div>
        <ul className="flex space-x-10">
          <li
            className="cursor-pointer text-lg "
            onClick={() => router.push('/')}
          >
            Home
          </li>
          <li className="cursor-pointer text-lg transition ease-in-out hover:-translate-y-1 hover:scale-110">
            Heroes
          </li>
          <li className="cursor-pointer text-lg  transition ease-in-out hover:-translate-y-1 hover:scale-110">
            About Us
          </li>
          <li className="cursor-pointer text-lg  transition ease-in-out hover:-translate-y-1 hover:scale-110">
            Contact
          </li>
          <li className="cursor-pointer text-lg  transition ease-in-out hover:-translate-y-1 hover:scale-110"></li>
          <li>
            <Link href="/cart" passHref>
              <div className="relative cursor-pointer">
                <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                <div className="text-black absolute top-[-10px] right-[-10px] flex h-[20px] w-[20px] items-center justify-center rounded-lg bg-white p-[3px] font-bold">
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
