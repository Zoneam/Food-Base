

// Create Flight form render
function newFlight(req, res) {
    res.render('flights/create');
}
// Rendering all Flights
function allFlights(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/viewflights', { flights });
      });
}
// Createing Flight
function createFlight({body: newFlightObj}, res) {
  newFlightObj.departs === '' ? newFlightObj.departs = undefined : newFlightObj.departs;
  const flight = new Flight(newFlightObj); 
  flight.save(function(err) {
    if (err) return res.render('/flights');
    res.redirect('/flights');
});
}

// Deleting Flight
function deleteFlight({params: {id}},res) {
  Flight.deleteOne({_id: id},function(err){
    res.redirect('/flights');
  });
}