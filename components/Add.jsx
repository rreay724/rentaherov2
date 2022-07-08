import { useState } from 'react'
import axios from 'axios'

const Add = ({ setClose }) => {
  const [mainImage, setMainImage] = useState(null)
  const [profileImage, setProfileImage] = useState(null)
  const [name, setName] = useState(null)
  const [summary, setSummary] = useState(null)
  const [price, setPrice] = useState()
  const [affiliation, setAffiliation] = useState()
  const [service, setService] = useState(null)
  const [serviceOptions, setServiceOptions] = useState([])

  //   const changePrice = (e, index) => {
  //     const currentPrices = prices
  //     currentPrices[index] = e.target.value
  //     setPrices(currentPrices)
  //   }

  const handleServiceInput = (e) => {
    // previous services plus target name equals e.target.value
    setService({ ...service, [e.target.name]: e.target.value })
  }

  //   sets state using previous data
  const handleService = (e) => {
    setServiceOptions((prev) => [...prev, service])
  }

  //   use cloudinary to store image
  const handleCreate = async () => {
    const data = new FormData()
    data.append('mainImage', mainImage)
    data.append('profileImage', profileImage)
    // add upload preset in cloudinary > settings > add upload preset. folder name is uploads
    // same as below. choose unsigned
    data.append('upload_preset', 'uploads')
    try {
      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_ID}/image/upload`,
        data
      )
      const { url } = uploadRes.data
      const newHero = {
        name,
        summary,
        price,
        serviceOptions,
        affiliation,
        img: url,
      }
      await axios.post('http://localhost:3000/api/products', newHero)
      setClose(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div>
        <span onClick={() => setClose(true)}>X</span>
        <h1>Add new pizza</h1>
        <div>
          <label>Choose an main image</label>
          <input
            type="file"
            onChange={(e) => setMainImage(e.target.files[0])}
          ></input>
        </div>
        <div>
          <label>Choose an profile image</label>
          <input
            type="file"
            onChange={(e) => setProfileImage(e.target.files[0])}
          ></input>
        </div>
        <div>
          <label>Hero Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <label>Summary</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div>
          <label>Affiliation</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setAffiliation(e.target.value)}
          />
        </div>
        <div>
          <label>Price</label>
          <div>
            <input
              type="number"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Services</label>
          <div>
            <input
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleServiceInput}
            />
            <button onClick={handleService}>Add</button>
          </div>
          <div>
            {serviceOptions.map((option) => (
              <span key={option.text}>{option.text}</span>
            ))}
          </div>
        </div>
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  )
}

export default Add
