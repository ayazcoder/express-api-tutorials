const mongoose = require ('mongoose')

const usersSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  email:{
    unique: true,
    type: String,
    required: true,
    trim: true
  },
  username:{
    unique: true,
    type: String,
    required: true,
    trim: true
  },
  password:{
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const User = mongoose.model('User', usersSchema)

module.exports = {User}