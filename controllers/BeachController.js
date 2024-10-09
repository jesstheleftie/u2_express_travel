const beaches = [
    { name: "Xelha", location: "Cancun", rating: 4.5, freeAdmission: false, price: 50, kidFriendly: true},
    { name: "Santa Monica", location: "Los Angeles", rating: 4, freeAdmission: true, price: 0, kidFriendly: true },
    { name: "Kitsilano", location: "Vancouver", rating: 3, freeAdmission: true, price: 0, kidFriendly: true},
    { name: "Huntington Beach", location: "California", rating: 4, freeAdmission: true, price: 0, kidFriendly:true},
  ];

//our Index / List route
const getBeaches = (req, res) => {
  res.send(beaches);
};

//Detail / Show route
const getBeach = (req, res) => {
  res.send(beaches[req.params.id]);
};

//Get by name
const getBeachByName = (req, res) => {
    let beachFound = beaches.find((beach) => {
      return beach.name === req.params.id;
    });
  res.send(beachFound)
  
  };

  //Get by location
  const getBeachByLocation =(req,res)=>{
    let beachesInLocation = beaches.filter((beach)=>{
        return beach.location.toLowerCase() === req.params.location
    })
    res.send(beachesInLocation)
  }

module.exports = {
  getBeaches,
  getBeach,
  getBeachByName,
  getBeachByLocation
};
