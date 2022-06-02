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
import { AiFillLock } from 'react-icons/ai'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const router = useRouter()
  const amount = cart.total
  const currency = 'USD'
  const style = { layout: 'vertical' }
  const taxAmount = amount * 0.053
  const totalAmount = amount + taxAmount

  console.log(taxAmount)

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
    <div className="min-h-[80vh] justify-center bg-gradient-to-r from-black-superLight to-black-superDuperLight lg:flex">
      <div className="my-10 rounded-md bg-gray-100 px-10 text-black-default lg:min-w-[70rem]">
        <h2 className="border-b border-black-default pt-10 text-lg font-semibold">
          Hero Summary
        </h2>
        <div>
          {cart.heroes.length === 0 ? (
            <p className="pt-2">No heroes in cart</p>
          ) : (
            cart.heroes.map((hero) => (
              <div className="flex h-40 items-center justify-between space-x-10 border-b border-black-default lg:w-[70rem]">
                <div className="flex items-center space-x-10">
                  <div>
                    <img
                      onClick={() => router.push(`/heroes/${hero._id}`)}
                      src={hero.img}
                      className="h-28 w-20 cursor-pointer rounded-md object-cover"
                    />
                  </div>
                  <div>
                    <h2
                      className="cursor-pointer font-bold "
                      onClick={() => router.push(`/heroes/${hero._id}`)}
                    >
                      {hero.name}
                    </h2>
                    <p>Service: {hero.selectedService.text}</p>
                  </div>
                </div>
                <div>
                  <p>Hours: {hero.hours}</p>
                </div>

                <span>${hero.price}.00</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Checkout details */}
      <div className="m-10 h-[22rem] w-80 rounded-lg border-2 bg-gray-100 px-5 pt-5 pb-10 shadow-lg">
        <div>
          <div className="space-y-2">
            <h2 className="font-semibold">Order Summary</h2>
            <div>
              <div className="flex justify-between text-sm">
                <label>Product Subtotal</label>
                <p>${cart.total}.00</p>
              </div>
              <div className="flex justify-between text-sm">
                <label>Estimated Travel Fee</label>
                <p>Free</p>
              </div>
              <div className="flex justify-between text-sm">
                <label>Estimated Taxes</label>
                <p>${parseFloat(taxAmount).toFixed(2)}</p>
              </div>
            </div>
            <div className="border-b border-black-default" />
            <div className="flex justify-between pb-5">
              <label className="font-semibold">Total:</label>
              <p className="font-semibold">
                ${parseFloat(totalAmount).toFixed(2)}
              </p>
            </div>
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
        <div className="mx-auto flex items-center pt-5">
          <div className="pr-2">
            <AiFillLock className="" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Security & Privacy</h3>
            <p className="text-xs">
              Every transaction on Rent-a-Hero is secure. Any personal
              information you give us will be handled according to our{' '}
              <span>Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
      {/* <OrderDetails total={cart.total} createOrder={createOrder} /> */}
    </div>
  )
}

export default Cart
