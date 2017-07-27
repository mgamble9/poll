const mongoose = require("mongoose")

const PollSchema = mongoose.Schema({
  poll: String,
  createdBy: String,
  option1: {option: {
                    type: String,
                    required: [true, "option name cannot be blank!"],
                    trim: true },
            count: {
                    type: Number,
                    default: 0 },
            },
  option2: {option: {
                    type: String,
                    required: [true, "option name cannot be blank!"],
                    trim: true },
            count: {
                    type: Number,
                    default: 0 },
            },
  option3: {option: {
                    type: String,
                    required: [true, "option name cannot be blank!"],
                    trim: true },
            count: {
                    type: Number,
                    default: 0 },
            },
  option4: {option: {
                    type: String,
                    required: [true, "option name cannot be blank!"],
                    trim: true },
            count: {
                    type: Number,
                    default: 0 },
            },
  },{ timestamps: true})

mongoose.model("Poll", PollSchema)
