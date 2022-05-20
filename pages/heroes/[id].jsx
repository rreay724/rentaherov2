import axios from 'axios'

const Hero = ({ hero }) => {
  return (
    <div>
      <p>{hero.name}</p>
    </div>
  )
}

export default Hero

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/heroes/${params.id}`)
  return {
    props: {
      hero: res.data,
    },
  }
}
