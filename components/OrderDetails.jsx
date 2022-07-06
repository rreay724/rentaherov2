import React from 'react'
import { useState } from 'react'

const OrderDetails = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState()
  const [address, setAddress] = useState()
  const [phoneNumber, setPhoneNumber] = useState()

  const handleClick = () => {
    createOrder({ customer, address, phoneNumber, total, method: 0 })
  }

  return (
    <div>
      <p>Total: {total}</p>
      <div className="flex space-x-4">
        <label>Customer</label>
        <input
          placeholder="Bobby Reay"
          type="text"
          onChange={(e) => setCustomer(e.target.value)}
        />
      </div>
      <div className="flex space-x-4">
        <label>Phone Number</label>
        <input
          placeholder="555-555-5555"
          type="text"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="flex space-x-4">
        <label>Address</label>
        <input
          placeholder="123 Elm Street, Ashburn, VA 20147"
          type="text"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>Order</button>
    </div>
  )
}

export default OrderDetails
