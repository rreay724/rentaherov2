import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { HeroCard } from '../components/index'
import axios from 'axios'

const Home = ({ heroes }) => {
  const router = useRouter()
  return (
    <div className="">
      <Head>
        <title>Rent a Hero V2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid h-screen place-items-center bg-[url('/img/background.jpg')] bg-cover">
        {/* <Image
          src="/img/background2.jpeg"
          layout="fill"
          alt=""
          objectFit="cover"
        /> */}
        <div className="absolute left-0 right-0 m-auto h-[17rem] w-[40rem] bg-black-default text-white opacity-90">
          <div className="pt-10">
            <h2 className="text-center text-5xl font-bold">Rent a Hero</h2>
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
      <div>
        <h2 className="text-center">Featured Heroes</h2>
        <div className="flex items-center justify-center space-x-10 px-24 py-5 text-center">
          {heroes.map((hero) => (
            <HeroCard key={hero._id} hero={hero} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/heroes')

  return {
    props: {
      heroes: res.data,
    },
  }
}
