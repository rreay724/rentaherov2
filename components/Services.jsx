import { FaBirthdayCake, FaGraduationCap } from 'react-icons/fa'
import {
  GiBatMask,
  GiPistolGun,
  GiPunchBlast,
  GiPineTree,
  GiGlassCelebration,
  GiPoliceBadge,
} from 'react-icons/gi'

const Services = () => {
  const services = [
    {
      icon: <FaBirthdayCake />,
      title: 'Birthday Parties',
      info: 'Surprise your child or favorite nerd friend adult with a visit from one of our Super Heroes for their birthday.',
    },
    {
      icon: <GiBatMask />,
      title: 'Combat Training',
      info: 'Bring in one of our heroes for a combat clinic for your law enforcement, security, or martial arts team.',
    },
    {
      icon: <GiPunchBlast />,
      title: 'Rough Up',
      info: 'Someone out of sorts? Stalking you? Harrassing your family? Hire one of our heroes to give them a gentle reminder to keep to themselves.',
    },
    {
      icon: <GiPistolGun />,
      title: 'Hit Job',
      info: "When a rough up won't work and the threat just has to be eliminated, select one of our choice heroes to take them out.",
    },
    {
      icon: <GiPineTree />,
      title: 'Holiday Parties',
      info: 'Company or personal holiday party and want it to stand out? Hire one of our heroes to liven up the fun.',
    },
    {
      icon: <GiGlassCelebration />,
      title: 'Bar and Bat Mitzvahs',
      info: 'Mazel Tov! Hire one of our heroes to make their day even more special',
    },
    {
      icon: <FaGraduationCap />,
      title: 'Commencement Speeches',
      info: 'Want to send your new grads off into the world with words of wisdom? Our heroes have the best words.',
    },
    {
      icon: <GiPoliceBadge />,
      title: 'Personal Security',
      info: 'Need security from the best? Hire one of our heroes for the ultimate protection and make sure you make it to and from your destination without harm.',
    },
  ]
  return (
    <div className=" pb-20">
      <h1 className="pt-10 text-center text-3xl font-bold text-white">
        Services
      </h1>
      <div className="mx-[20vw] mb-10 border-b border-white py-2" />

      <div className="md:text:md grid grid-cols-2 items-center justify-items-center text-center text-sm lg:grid-cols-4">
        {services.map((service) => (
          <div
            className="h-60 w-40 justify-center pt-5 text-gray-200 md:w-60"
            key={service.title}
          >
            <span className="grid grid-cols-1 place-items-center text-4xl text-blue-700">
              {service.icon}
            </span>
            <h4 className="pb-1 pt-4 text-lg font-semibold">{service.title}</h4>
            <p>{service.info}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
