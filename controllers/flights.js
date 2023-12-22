const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
  index,
  new: newFlight,
  create,
  show: showFlight,
  addDestination,
  createTicket
};


async function index(req, res) {
  const flights = await Flight.find({});
  console.log(flights)
  res.render('flights/index', {title:'All Flights',flights})
}

async function showFlight(req,res){

  const flight = await Flight.findById(req.params.id).populate({path:'tickets'})
  console.log(flight)
  const tickets = await Ticket.find({flight: flight._id})
  res.render('flights/show', {title: 'Flight Detail', flight, tickets})

}


async function addDestination(req,res){
  const flight = await Flight.findById(req.params.id)

  try {
    flight.destinations.push(req.body);
    await flight.save()
    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect('/flights');  // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('flights/new', { errorMsg: err.message, });
  }
}

async function createTicket(req, res){
  const ticket = await Ticket.create(req.body);
  const flight = await Flight.findById(req.params.id)
  console.log("flight variable: " + flight + "ticket_id variable: " + ticket._id)
  flight.tickets.push(ticket)
  await flight.save()
  console.log(flight)
  res.redirect(`/flights/${flight._id}` )
  
}


 function newFlight(req, res) {
   // We'll want to be able to render an  
   // errorMsg if the create action fails
   res.render('flights/new', { title: 'Create New Flight',errorMsg: ''  });
 }

 async function create(req, res) {

  try {
    await Flight.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect('/flights');  // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('flights/new', { errorMsg: err.message, });
  }
}