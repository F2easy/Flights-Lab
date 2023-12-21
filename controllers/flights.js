const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
  show: showFlight,
  addDestination
};


async function index(req, res) {
  const flights = await Flight.find({});
  console.log(flights)
  res.render('flights/index', {title:'All Flights',flights})
}

async function showFlight(req,res){

  const flight = await Flight.findById(req.params.id)
  console.log(req.params)
  res.render('flights/show', {title: 'Flight Details',flight})
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