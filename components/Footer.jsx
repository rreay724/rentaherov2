import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="z-[999] bg-black-light py-24 px-5 text-[#F8F0E3]">
      <div className="grid grid-cols-1 items-center space-y-10  px-10  md:grid-cols-2 md:space-y-5 lg:grid-cols-4 lg:justify-between lg:justify-items-center">
        <div className="space-y-5">
          <h1 className="text-2xl text-white">Rent a Hero</h1>
          <p>
            We have a growing roster of heroes for rent, from Marvel, to DC, to
            outterworldly and beyond.
          </p>
        </div>
        <div className="">
          <span className="text-lg">Subscribe to our newsletter</span>
          <div className="flex space-x-3 pt-2">
            <input
              className="h-[2.5rem] w-52  border border-gray-400 bg-black-light pl-2"
              placeholder="Email address"
            />
            <button className=" md:text-md cursor-pointer bg-blue-500 px-3 py-1 text-sm">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div>
          <h3>FOLLOW US</h3>
          <div className="flex items-center space-x-6 pt-2">
            <span>
              <BsFacebook />
            </span>
            <span>
              <BsInstagram />
            </span>
            <span>
              <BsTwitter />
            </span>
          </div>
        </div>
        <div>
          <ul className="space-y-10 text-sm">
            <li className="footer-li">FAQ</li>
            <li className="footer-li">Careers</li>
            <li className="footer-li">Terms of Use</li>
            <li className="footer-li">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
