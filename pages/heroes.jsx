import axios from 'axios'

const Heroes = ({ heroes }) => {
  return (
    <div className="flex">
      <div className="min-h-screen w-60 bg-black-default text-white">
        <div>
          <h4>Affiliation</h4>
          <ul>
            <li>Marvel</li>
            <li>DC</li>
            <li>Fox Hound</li>
            <li>Sparta</li>
          </ul>
        </div>
      </div>
      <div>
        {heroes.map((hero) => (
          <p>{hero.name}</p>
        ))}
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
