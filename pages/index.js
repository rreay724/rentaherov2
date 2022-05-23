import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { HeroCard, Services } from '../components/index'
import axios from 'axios'

const Home = ({ heroes }) => {
  const router = useRouter()
  return (
    <div className="">
      <Head>
        <title>Rent a Hero V2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid h-screen bg-[url('/img/background.jpg')] bg-cover">
        <div className=" m-auto h-[17rem] w-[30rem] bg-black-default text-white opacity-90 md:w-[40rem]">
          <div className="pt-10">
            <h2 className="text-center text-5xl font-bold ">Rent a Hero</h2>
            <div className="mx-40 my-5 border-4 border-b border-blue-500" />
            <p className="text-center text-lg">
              Check out our growing list of heroes for rent
            </p>
            <div className="pt-5 text-center">
              <button
                onClick={() => router.push('/heroes')}
                className=" h-10 w-40 cursor-pointer bg-blue-500 text-white transition duration-700 ease-in-out hover:border-4 hover:border-blue-500 hover:bg-black-medium hover:font-bold hover:text-blue-500"
              >
                Heroes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Middle Section */}
      <div className="bg-black-superLight">
        <Services />
      </div>
      {/* Bottom section */}
      <div className="items-center bg-black-superDuperLight md:px-28 lg:px-10 xl:px-36">
        <h2 className="pt-5 text-center text-3xl font-bold text-white">
          Featured Heroes
        </h2>
        <div className="mx-[20vw] mb-10 border-b border-white py-2" />
        <div className="grid grid-cols-1 items-center justify-items-center gap-5 py-5 md:grid-cols-2 lg:grid-cols-4">
          {heroes.slice(0, 4).map((hero) => (
            <HeroCard key={hero._id} hero={hero} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const res = await axios.get(`https://rentaherov2.vercel.app/api/heroes`)

  return {
    props: {
      heroes: res.data,
    },
  }
}
