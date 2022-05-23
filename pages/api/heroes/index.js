import dbConnect from '../../../lib/mongo'
import Hero from '../../../models/Hero'

const handler = async (req, res) => {
  const { method } = req

  await dbConnect()

  if (method === 'GET') {
    try {
      const heroes = await Hero.find()
      res.status(200).json(heroes)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  if (method === 'POST') {
    try {
      const hero = await Hero.create(req.body)
      res.status(201).json(hero)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

export default handler
