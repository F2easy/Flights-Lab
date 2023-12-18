// import mongoose
const mongoose = require('mongoose')
// optional shortcut to the monggose.schema class
// tis proces is called destructuring
const { Schema } = mongoose //or could do const Schema = mongoose.Schema



const flightSchema = new Schema({
  // defining models
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date
})