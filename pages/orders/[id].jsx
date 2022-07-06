import axios from 'axios'

const Order = ({ order }) => {
  return <div>{order._id}</div>
}

export default Order

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/api/orders/${params.id}`
  )
  return {
    props: { order: res.data },
  }
}
