import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { HeroCard, Services, Add, AddButton } from '../components/index'
import axios from 'axios'

const Home = ({ heroes, admin }) => {
  const router = useRouter()
  const heroArray = [...heroes].sort(() => 0.5 - Math.random())
  const [close, setClose] = useState(true)

  return (
    <div className="">
      <Head>
        <title>Rent a Hero V2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid h-[65vh] bg-[url('/img/background.jpg')] bg-cover">
        <div className="m-auto h-[13rem] rounded-2xl  bg-gradient-to-b from-black-default to-black-light text-white opacity-90 md:h-[15rem]">
          <div className="w-[20rem] pt-8 md:w-[40rem]">
            <h2 className="pb-5 text-center text-2xl font-bold md:text-5xl">
              Rent a Hero
            </h2>
            <p className="text-center text-sm md:text-xl">
              Check out our growing list of heroes for rent
            </p>
            <div className="pt-5 text-center">
              <button
                onClick={() => router.push('/heroes')}
                className=" h-10 w-40 cursor-pointer rounded-sm bg-blue-500 text-white transition duration-700 
                ease-in-out hover:border-4 hover:border-blue-500 hover:bg-black-medium hover:font-bold hover:text-blue-500"
              >
                Heroes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {admin && <AddButton setClose={setClose} />}
      {!close && <Add setClose={setClose} />} */}
      {/* Middle Section */}
      <div className="bg-gradient-to-b from-black-superLight to-black-superDuperLight px-0 md:px-20">
        <Services />
      </div>
      {/* Bottom section */}

      <div className="items-center  bg-gradient-to-t from-black-superLight to-black-superDuperLight md:px-28 lg:px-10 xl:px-36">
        <h2 className="pt-5 text-center text-3xl font-bold text-white ">
          Featured Heroes
        </h2>
        <div className="mx-[20vw] mb-10 border-b border-white py-2" />
        <div className="grid grid-cols-1 items-center justify-items-center gap-5 pb-20 pt-5 md:grid-cols-2 lg:grid-cols-4">
          {heroArray.slice(0, 4).map((hero) => (
            <HeroCard key={hero._id} hero={hero} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async (context) => {
  const myCookie = context.req?.cookies || ''
  let admin = false

  if (myCookie.token === process.env.NEXT_PUBLIC_TOKEN) {
    admin = true
  }
  const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST_URL}/api/heroes`)

  return {
    props: {
      heroes: res.data,
      admin,
    },
  }
}
