Schema = mongoose.Schema


const ticketSchema = new Schema({
  // defining models
  seat:{
    type: String,
    match: /[A-F][1-9]\d?/
  }, 
  flight:{ 
    type: mongoose.Types.ObjectId,
    ref: "Flight"
    
  },
  price:{
   type: Number,
    min: 0,
    
  },
  
})


module.exports = mongoose.model('Ticket', ticketSchema);