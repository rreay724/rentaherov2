import dbConnect from '../../../lib/mongo'
import Hero from '../../../models/Hero'
import axios from 'axios'

// use async because it's performing CRUD operations and can't
// determine how long it will take
export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req

  dbConnect()
  const token = cookies.token

  switch (method) {
    case 'GET':
      try {
        const hero = await Hero.findById(id)
        res.status(200).json(hero)
      } catch (err) {
        res.status(500).json(err)
      }
      break

    case 'POST':
      try {
        const hero = await Hero.create(req.body)
        res.status(200).json(hero)
      } catch (err) {
        res.status(500).json(err)
      }
      break
    case 'PUT':
      if (!token || token !== process.env.NEXT_PUBLIC_TOKEN) {
        return res.status(401).json('Not authenticated')
      }
      try {
        const hero = await Hero.create(req.body)
        res.status(200).json(hero)
      } catch (err) {
        res.status(500).json(err)
      }
      break
    case 'DELETE':
      if (!token || token !== process.env.NEXT_PUBLIC_TOKEN) {
        return res.status(401).json('Not authenticated')
      }
      try {
        await Hero.findByIdAndDelete(id)
        res.status(200).json('hero successfully deleted')
      } catch (err) {
        res.status(500).json(err)
      }
      break
  }
}
