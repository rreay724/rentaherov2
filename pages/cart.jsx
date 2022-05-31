import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { reset } from '../redux/cartSlice'
import { useRouter } from 'next/router'
import { OrderDetails } from '../components'
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const router = useRouter()
  const amount = cart.total
  const currency = 'USD'
  const style = { layout: 'vertical' }

  const createOrder = async (data) => {
    console.log('data:', data)
    try {
      const res = await axios.post('http://localhost:3000/api/orders', data)
      if (res.status === 201) {
        dispatch(reset())
        router.push(`/orders/${res.data._id}`)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer()

    useEffect(() => {
      dispatch({
        type: 'resetOptions',
        value: {
          ...options,
          currency: currency,
        },
      })
    }, [currency, showSpinner])

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId
              })
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              // Create order here
              const shipping = details.purchase_units[0].shipping
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              })
            })
          }}
        />
      </>
    )
  }

  return (
    <div className="flex min-h-[80vh] justify-between">
      <div>
        {cart.heroes.map((hero) => (
          <div className="flex h-40 items-center space-x-20 border-t-2 pl-10">
            <img
              onClick={() => router.push(`/heroes/${hero._id}`)}
              src={hero.img}
              className="h-20 w-20 cursor-pointer rounded-md object-cover"
            />
            <h2
              className="cursor-pointer font-bold"
              onClick={() => router.push(`/heroes/${hero._id}`)}
            >
              {hero.name}
            </h2>
            <span>Hours: {hero.hours}</span>
            <span>Service: {hero.selectedService.text}</span>
            <span>${hero.price}.00</span>
          </div>
        ))}
      </div>
      {/* Checkout details */}
      <div className="w-80 rounded-lg border-2 p-10 shadow-lg">
        <div>
          <div className="flex justify-between">
            <label>Total:</label>
            <span>{cart.total}</span>
          </div>
          <PayPalScriptProvider
            options={{
              'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
              components: 'buttons',
              currency: 'USD',
              'disable-funding': 'credit,card,venmo',
            }}
          >
            <ButtonWrapper currency={currency} showSpinner={false} />
          </PayPalScriptProvider>
        </div>
      </div>
      {/* <OrderDetails total={cart.total} createOrder={createOrder} /> */}
    </div>
  )
}

export default Cart
