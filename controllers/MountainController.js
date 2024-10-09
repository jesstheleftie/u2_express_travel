const mountains = [
    { name: "Mt.Fuji", location: "Japan", rating: 5, freeAdmission: false, price: 10, kidFriendly: false},
    { name: "Mount Baker", location: "Washington", rating: 4, freeAdmission: true, price: 0, kidFriendly: true },
    { name: "Whistler Mountain", location: "British Columbia", rating: 4.5, freeAdmission: true, price: 0, kidFriendly: false },
    { name: "Dolomites", location: "Italy", rating: 5, freeAdmission: true, price: 0, kidFriendly: false },  
];
  
  //our Index / List route
  const getMountains = (req, res) => {
    res.send(mountains);
  };
  
  //Detail / Show route
  const getMountain = (req, res) => {
    res.send(mountains[req.params.id]);
  };
  
  //Get by name
const getMountainByName = (req, res) => {
    let mountainFound = mountains.find((mountain) => {
      return mountain.name === req.params.id;
    });
  res.send(mountainFound)
  
  };

   //Get by location
   const getMountainByLocation =(req,res)=>{
    let mountainsInLocation = mountains.filter((mountain)=>{
        return mountain.location.toLowerCase() === req.params.location
    })
    res.send(mountainsInLocation)
  }

  module.exports = {
    getMountains,
    getMountain,
    getMountainByName,
    getMountainByLocation
  };
  