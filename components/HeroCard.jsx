import Image from 'next/image'
import { useRouter } from 'next/router'

const HeroCard = ({ hero }) => {
  const router = useRouter()
  return (
    <div className="h-[24rem] w-[15rem] rounded-lg border border-black-default bg-black-light  text-white shadow-2xl">
      <div className="items-center justify-center text-center">
        <h4 className="text-black py-2 text-lg font-semibold">{hero.name}</h4>

        <Image src={hero.img} width={250} height={250} objectFit="cover" />
        {/* <p className="text-md py-3 px-2">{hero.summary}</p> */}
        <div className="pt-5">
          <button
            onClick={() => router.push(`/heroes/${hero._id}`)}
            className="h-10 w-40 cursor-pointer rounded-sm bg-blue-500 text-white transition duration-700 ease-in-out hover:border-4 
            hover:border-blue-500 hover:bg-black-medium hover:font-bold hover:text-blue-500"
          >
            Hero Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
