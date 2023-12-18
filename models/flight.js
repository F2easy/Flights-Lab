// import mongoose
const mongoose = require('mongoose')
// optional shortcut to the monggose.schema class
// tis proces is called destructuring
const { Schema } = mongoose //or could do const Schema = mongoose.Schema



const flightSchema = new Schema({
  // defining models
  airline:{
    String,
    enum:['American','Southwest','United']
  }, 
  airport:{ 
    String,
    enum:['AUS','DFW','DEN','LAX','SAN']
  },
  flightNo:
    Number,
    min: 10,
    max: 9999,
  

  departs: Date
})

