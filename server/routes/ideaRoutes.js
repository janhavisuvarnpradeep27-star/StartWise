import express from 'express'
import Idea from '../models/Idea.js'

const router = express.Router()

const calculateIdeaScore = ({ title, description, domain }) => {
  let score = 30

  if (description && description.length > 100) {
    score += 30
  }

  if (domain) {
    score += 20
  }

  if (title && title.length > 5) {
    score += 20
  }

  return Math.min(score, 100)
}

router.post('/idea', async (req, res) => {
  try {
    const { title, description, domain, createdBy } = req.body

    if (!title || !description || !createdBy) {
      return res.status(400).json({ message: 'Title, description, and creator are required.' })
    }

    const score = calculateIdeaScore({ title, description, domain })

    const idea = await Idea.create({
      title,
      description,
      domain,
      score,
      createdBy,
    })

    res.status(201).json(idea)
  } catch (error) {
    res.status(500).json({ message: 'Failed to create idea.' })
  }
})

router.get('/ideas', async (_req, res) => {
  try {
    const ideas = await Idea.find().populate('createdBy', 'name role')
    res.json(ideas)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch ideas.' })
  }
})

router.post('/interest/:id', async (req, res) => {
  try {
    const { investorId } = req.body
    const idea = await Idea.findById(req.params.id)

    if (!idea) {
      return res.status(404).json({ message: 'Idea not found.' })
    }

    if (!investorId) {
      return res.status(400).json({ message: 'Investor ID required.' })
    }

    const alreadyInterested = idea.interestedUsers.some(
      (userId) => userId.toString() === investorId
    )

    if (!alreadyInterested) {
      idea.interestedUsers.push(investorId)
      await idea.save()
    }

    res.json(idea)
  } catch (error) {
    res.status(500).json({ message: 'Failed to update interest.' })
  }
})

router.get('/my-ideas/:userId', async (req, res) => {
  try {
    const ideas = await Idea.find({ createdBy: req.params.userId })
    res.json(ideas)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user ideas.' })
  }
})

export default router
