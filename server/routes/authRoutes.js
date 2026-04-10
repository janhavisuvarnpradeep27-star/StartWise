import express from 'express'
import User from '../models/User.js'

const router = express.Router()

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role } = req.body

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required.' })
    }

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered.' })
    }

    const user = await User.create({ name, email, password, role })
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    })
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user.' })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required.' })
    }

    const user = await User.findOne({ email, password })

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' })
    }

    res.json({ id: user._id, role: user.role })
  } catch (error) {
    res.status(500).json({ message: 'Login failed.' })
  }
})

export default router
