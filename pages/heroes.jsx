import axios from 'axios'

const Heroes = ({ heroes }) => {
  return (
    <div>
      {heroes.map((hero) => (
        <p>{hero.name}</p>
      ))}
    </div>
  )
}

export default Heroes

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/heroes`)
  return {
    props: {
      heroes: res.data,
    },
  }
}
