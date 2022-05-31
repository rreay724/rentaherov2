import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { reset } from '../redux/cartSlice'
import { useRouter } from 'next/router'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const router = useRouter()
  console.log(cart)
  return (
    <div>
      <div>
        {cart.heroes.map((hero) => (
          <div className="flex h-40 items-center space-x-20 border-t-2 pl-10">
            <img src={hero.img} className="h-20 w-20 object-cover" />
            <h2>{hero.name}</h2>
            <span>Hours: {hero.hours}</span>
            <span>Service: {hero.selectedService.text}</span>
            <span>${hero.price}.00</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
