import axios from 'axios'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { useState } from 'react'
import { HeroesPageCard } from '../components'

const Heroes = ({ heroes }) => {
  const [affHidden, setAffHidden] = useState('hidden')
  const [serviceHidden, setServiceHidden] = useState('hidden')
  const [affiliation, setAffiliation] = useState(null)

  const services = [
    'Birthday Party',
    'Assassination',
    'Security Detail',
    'Speech',
  ]

  const handleAffClick = () => {
    if (affHidden === 'hidden') {
      setAffHidden('')
    } else if (affHidden === '') {
      setAffHidden('hidden')
    }
  }
  const handleServiceClick = () => {
    if (serviceHidden === 'hidden') {
      setServiceHidden('')
    } else if (serviceHidden === '') {
      setServiceHidden('hidden')
    }
  }

  // deduplicate affiliation to list in sidebar
  let affiliations = [
    ...new Map(heroes.map((hero) => [hero['affiliation'], hero])).values(),
  ]

  return (
    <div className="flex bg-gradient-to-t from-black-superLight to-black-superDuperLight">
      <div className="hidden min-h-screen w-80 bg-black-default px-5 pt-20 text-white md:inline-block ">
        <div className="">
          <div className="items-center border-b-2 border-t-2">
            <div
              className="flex cursor-pointer items-center  justify-between pr-2 pt-2 pb-2"
              onClick={handleAffClick}
            >
              <h4 className="text-lg">AFFILIATION</h4>{' '}
              {affHidden === 'hidden' ? <BsChevronDown /> : <BsChevronUp />}
            </div>

            <div className={`${affHidden}`}>
              <ul
                className="space-y-4 pb-2 
                transition duration-700 ease-in-out"
              >
                <li
                  onClick={() => setAffiliation(null)}
                  className="cursor-pointer"
                >
                  All
                </li>
                {affiliations.map((hero) => (
                  <li
                    className="cursor-pointer"
                    onClick={() => setAffiliation(hero.affiliation)}
                    key={hero._id}
                  >
                    {hero.affiliation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" border-b-2 ">
            <div
              className="flex cursor-pointer items-center  justify-between pr-2 pt-2 pb-2"
              onClick={handleServiceClick}
            >
              <h4 className="text-lg">SERVICES</h4>{' '}
              {serviceHidden === 'hidden' ? <BsChevronDown /> : <BsChevronUp />}
            </div>

            <div className={`${serviceHidden}`}>
              <ul
                className="space-y-4  pb-2 transition 
                duration-700 ease-in-out"
              >
                {services.map((service) => (
                  <li className="cursor-pointer">{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-2 gap-8 p-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {affiliation !== null
          ? heroes
              .filter((hero) => hero.affiliation === affiliation)
              .map((hero) => <HeroesPageCard hero={hero} key={hero._id} />)
          : heroes.map((hero) => <HeroesPageCard hero={hero} />)}
      </div>
    </div>
  )
}

export default Heroes

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST_URL}/api/heroes`)
  return {
    props: {
      heroes: res.data,
    },
  }
}
