import { useRouter } from 'next/router'

const HeroesPageCard = ({ hero }) => {
  const router = useRouter()

  return (
    <div className="h-[24rem] rounded-md  shadow-lg">
      <div
        className="cursor-pointer text-white"
        onClick={() => router.push(`/heroes/${hero._id}`)}
      >
        <img className="h-80 w-48 object-cover " src={hero.img} />
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
