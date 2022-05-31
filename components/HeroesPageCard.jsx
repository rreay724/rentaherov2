import { useRouter } from 'next/router'

const HeroesPageCard = ({ hero }) => {
  const router = useRouter()

  return (
    <div>
      <div
        className="cursor-pointer"
        onClick={() => router.push(`/heroes/${hero._id}`)}
      >
        <img className="h-80 w-48 object-cover " src={hero.img} />
        <h4 className="text-sm">{hero.name}</h4>
        <span className="text-sm">${hero.price}.00</span>
      </div>
    </div>
  )
}

export default HeroesPageCard
