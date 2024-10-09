const camps = [
    { name: "Lake Louise", location: "Banff", rating: 5, freeAdmission: false, price: 40, kidFriendly: true},
    { name: "Garibaldi", location: "British Columbia", rating: 4.5, freeAdmission: true, price: 0, kidFriendly: false },
    { name: "Algonquin", location: "Ontario", rating: 4, freeAdmission: true, price: 0, kidFriendly: true},
    { name: "Joshua Tree", location: "California", rating: 4, freeAdmission: false, price: 30, kidFriendly: false},
  ];

  
  //our Index / List route
  const getCamps = (req, res) => {
    res.send(camps);
  };
  
  //Detail / Show route
  const getCamp = (req, res) => {
    res.send(camps[req.params.id]);
  };

    //Get by name
const getCampByName = (req, res) => {
    let campFound = camps.find((camp) => {
      return camp.name === req.params.id;
    });
  res.send(campFound)
  
  };

    //Get by location
    const getCampByLocation =(req,res)=>{
        let campsInLocation = camps.filter((camp)=>{
            return camp.location.toLowerCase() === req.params.location
        })
        res.send(campsInLocation)
      }
  
  module.exports = {
    getCamps,
    getCamp,
    getCampByName,
    getCampByLocation
  };
  