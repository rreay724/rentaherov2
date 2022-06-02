import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Header = () => {
  const router = useRouter()
  const quantity = useSelector((state) => state.cart.quantity)
  return (
    <div className="sticky top-0 z-[999] flex items-center justify-between bg-black-default px-10 py-5 text-white md:justify-between">
      <div className="hidden md:flex">
        <h1 className="text-2xl font-bold md:visible">Rent-a-Hero</h1>
      </div>
      <div>
        <ul className="flex items-center space-x-5 md:space-x-10">
          <li className="navbar-item" onClick={() => router.push('/')}>
            Home
          </li>
          <li onClick={() => router.push('/heroes')} className="navbar-item">
            Heroes
          </li>
          <li className="navbar-item">About</li>
          <li className="navbar-item">Contact</li>
          <li className="navbar-item"></li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className="relative w-7 cursor-pointer">
          <img src="/img/cart.png" className="" />
          <div className="absolute top-[-10px] right-[-10px] flex h-[20px] w-[20px] items-center justify-center rounded-lg bg-white p-[3px] font-bold text-black-default">
            {quantity}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Header
