import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
  },
  status: {
    type: String,
    enum: ['subscribed', 'unsubscribed'],
    default: 'subscribed'
  },
  subscribed_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

export default Newsletter;
