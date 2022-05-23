import axios from 'axios'
import Image from 'next/image'

const Hero = ({ hero }) => {
  console.log(hero.additionalServices)
  return (
    <div>
      <div className="flex ">
        <div className="">
          <Image src={hero.img} width={1000} height={1000} objectFit="cover" />
        </div>
        <div className="">
          <h2>Name: {hero.name}</h2>
          <p>{hero.summary}</p>
          <span>${hero.price}.00 per day</span>
          {hero.additionalServices.map((service) => (
            <div key={service._id} className="flex">
              <div className="flex items-center space-x-2">
                <input type="checkbox" />
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/heroes/${params.id}`)
  return {
    props: {
      hero: res.data,
    },
  }
}
