import axios from 'axios'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addHero } from '../../redux/cartSlice'
import toast from 'react-hot-toast'

const Hero = ({ hero }) => {
  const quantity = 1
  const [hours, setHours] = useState(1)
  const [selectedService, setSelectedService] = useState(
    hero.additionalServices[0]
  )
  const [image, setImage] = useState(hero.profileImage)
  const [price, setPrice] = useState(hero.price)
  const dispatch = useDispatch()

  useEffect(() => {
    setPrice(selectedService.price + hero.price * hours)
  }, [selectedService, hours])

  const selectImage = (imageSrc) => {
    setImage(imageSrc)
  }

  const handleClick = () => {
    const notification = toast.loading('Creating new post...')
    try {
      dispatch(addHero({ ...hero, selectedService, price, quantity, hours }))
      toast.success('Hero added to cart!', { id: notification })
    } catch (error) {
      toast.error('Whoops, something went wrong! Please try again.', {
        id: notification,
      })
    }
  }

  return (
    <div className="min-h-[50rem] justify-center bg-gradient-to-b from-black-superLight to-black-superDuperLight pt-5 pb-10 text-white ">
      <div className="flex-none items-center justify-center md:mx-40 lg:flex">
        <div>
          <img
            src={image}
            alt=""
            className="h-[20rem] w-[35rem] object-contain md:h-[40rem]"
          />
          <div className="flex justify-center py-10">
            {hero.additionalImages.map((image) => (
              <div className="px-2" key={image.src}>
                <img
                  src={image.src}
                  className="h-20 w-20 cursor-pointer object-cover"
                  key={image.src}
                  onClick={() => selectImage(image.src)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pb-10 pr-20">
          <div className="space-y-3 pl-20">
            <div className="space-y-1 pb-6">
              <h2 className="text-2xl md:text-3xl">{hero.name}</h2>
              <p className="text-lg text-gray-300">{hero.summary}</p>

              <div className="pb-2 text-gray-300">
                <span>Affiliation: {hero.affiliation}</span>
              </div>
              <span className="text-gray-300">${hero.price}.00 per hour</span>
            </div>
            <div className="">
              <div>
                <label>Service</label>
              </div>
              <select
                className="h-8  w-[10rem] bg-black-superDuperLight md:w-[20rem]"
                onChange={(e) => setSelectedService(JSON.parse(e.target.value))}
              >
                {hero.additionalServices.map((service) => (
                  <option
                    name={service.text.toLowerCase()}
                    key={service.text}
                    value={JSON.stringify(service)}
                  >
                    {service.text} - ${service.price}.00
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <div>
                <label>Number of hours</label>
              </div>
              <select
                className="h-8 w-[10rem] bg-black-superDuperLight text-white md:w-[20rem]"
                onChange={(e) => setHours(e.target.value)}
              >
                {Array.from({ length: 24 }).map((hour, i) => (
                  <option key={i} name={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-3">
              <button
                onClick={handleClick}
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
