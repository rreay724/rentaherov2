import axios from 'axios'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'

const Order = ({ order }) => {
  const router = useRouter()
  return (
    <div class="min-h-[60vh] scrollbar-hide">
      <div>
        <div class="mx-auto my-10 w-[20rem] border p-5 py-14 shadow-lg md:mt-24 md:h-[40rem] md:w-[36rem] lg:mt-36 lg:h-[40rem] lg:w-[40rem]">
          <div class="flex w-full justify-center md:pt-20 lg:pt-40">
            <div class="flex items-center space-x-3">
              <span>
                <AiFillCheckCircle class="text-5xl text-green-500" />
              </span>
              <div>
                <p class="lg:text-md text-sm">Order number: {order._id}</p>
                <h1 class="text-lg font-bold lg:text-2xl">
                  Your hero order is complete!
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-10 lg:pt-20">
            <p className="text-center text-lg lg:px-44">
              Thank you for your order! Your payment of ${order.total} has been
              received. Our heroes will be in touch shortly.
            </p>
          </div>
          <div className="flex justify-center pt-20">
            <button
              onClick={() => router.push('/heroes')}
              className="rounded-full border bg-blue-400 px-4 py-2 text-white shadow-lg hover:scale-105"
            >
              Browse More Heroes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
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
