import Image from 'next/image'

const HeroCard = ({ imgSrc, name, description }) => {
  return (
    <div className="h-[44vh] w-[20vw] rounded-lg border bg-black-light text-white shadow-2xl">
      <div className="items-center justify-center   text-center">
        <Image src={imgSrc} width={400} height={250} objectFit="cover" />
        <h4 className="text-black pt-8 text-lg font-semibold">{name}</h4>
        <p className="text-md py-3">{description}</p>
        <div className="pt-5">
          <button className="cursor-pointer border-4 border-black-superDuperLight py-2 px-8 transition ease-in-out hover:-translate-y-1 hover:scale-110">
            Hero Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
