import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'

const Hero = ({ hero }) => {
  const [quantity, setQuantity] = useState(1)

  console.log(hero.additionalServices)
  return (
    <div className="justify-center  bg-black-superLight pt-20 pb-10 text-white">
      <div className="mx-20 flex-none items-center justify-center md:mx-40 lg:flex">
        <div>
          <img
            src={hero.profileImage}
            alt=""
            className="h-[20rem] w-[35rem] object-contain"
          />
          <div className="flex justify-center py-10">
            {hero.additionalImages.map((image) => (
              <img src={image.src} className="h-20 w-20 object-contain" />
            ))}
          </div>
        </div>

        <div className="flex justify-center pb-10 pr-20">
          <div className="space-y-3 pl-20">
            <div className="space-y-1 pb-6">
              <h2 className="text-2xl md:text-3xl">{hero.name}</h2>
              <p className="text-lg">{hero.summary}</p>

              <div className="pb-2">
                <span>Affiliation: {hero.affiliation}</span>
              </div>
            </div>

            <span className="">${hero.price}.00 per day</span>

            <div className="flex ">
              {hero.additionalServices.map((service) => (
                <div key={service._id} className=" flex">
                  <div className="flex items-center space-x-2 px-1">
                    <input type="checkbox" />
                    <p>{service.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <label>Number of days</label>
              <input
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                defaultValue={1}
                className="w-10 text-center text-black-default"
                min="1"
              />
            </div>

            <div className="pt-3">
              <button
                className="w-[20rem] border bg-blue-500 py-3 px-5 text-sm text-white transition duration-700  
            ease-in-out hover:border-blue-500 hover:bg-black-superLight hover:font-bold hover:text-blue-500"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/api/heroes/${params.id}`
  )
  return {
    props: {
      hero: res.data,
    },
  }
}
