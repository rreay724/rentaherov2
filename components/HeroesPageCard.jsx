import { useRouter } from 'next/router'

const HeroesPageCard = ({ hero }) => {
  const router = useRouter()

  return (
    <div className="h-[24rem] rounded-md ">
      <div
        className="max-h-[24rem] cursor-pointer text-white"
        onClick={() => router.push(`/heroes/${hero._id}`)}
      >
        <div className="overflow-hidden">
          <img
            className="h-80 w-48 object-cover transition duration-1000 ease-in-out hover:scale-125"
            src={hero.img}
          />
        </div>
        <div className="">
          <h4 className="text-sm">{hero.name}</h4>
          <p className="text-sm">{hero.affiliation}</p>
          <p className="text-sm">${hero.price}.00</p>
        </div>
      </div>
    </div>
  )
}

export default HeroesPageCard
