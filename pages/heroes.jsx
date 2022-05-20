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
  const res = await axios.get(`http://localhost:3000/api/heroes`)
  return {
    props: {
      heroes: res.data,
    },
  }
}
