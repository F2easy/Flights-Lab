// import mongoose
const mongoose = require('mongoose')
// optional shortcut to the monggose.schema class
// tis proces is called destructuring
const { Schema } = mongoose //or could do const Schema = mongoose.Schema



const flightSchema = new Schema({
  // defining models
  airline:{
    type: String,
    enum:['American','Southwest','United']
  }, 
  airport:{ 
    type: String,
    enum:['AUS','DFW','DEN','LAX','SAN']
  },
  flightNo:{
   type: Number,
    min: 10,
    max: 9999,
  },
  departs: { 
    type: Date
  }
})

module.exports = mongoose.model('Flights',flightSchema)
