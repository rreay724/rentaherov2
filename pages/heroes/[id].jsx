import axios from 'axios'
import Image from 'next/image'

const Hero = ({ hero }) => {
  console.log(hero.additionalServices)
  return (
    <div className="justify-center  bg-black-superLight pt-20 pb-10 text-white">
      <div className="mx-20 flex-none items-center justify-center md:mx-40 lg:flex">
        <div>
          <img
            src={hero.profileImage}
            alt=""
            className="h-[30rem] w-[35rem] object-contain"
          />
          <div className="flex justify-center py-10">
            {hero.additionalImages.map((image) => (
              <img src={image.src} className="h-20 w-20 object-contain" />
            ))}
          </div>
        </div>

        <div className="flex justify-center pb-10 pr-20">
          <div className="space-y-3 pl-20">
            <h2 className="text-3xl">{hero.name}</h2>
            <div className="pb-2">
              <span>Affiliation: {hero.affiliation}</span>
            </div>
            <span className="">${hero.price}.00 per day</span>
            <p className="text-lg">{hero.summary}</p>
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
