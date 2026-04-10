import mongoose from 'mongoose'

const ideaSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    domain: { type: String },
    score: { type: Number, default: 0 },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    interestedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
)

const Idea = mongoose.model('Idea', ideaSchema)

export default Idea
