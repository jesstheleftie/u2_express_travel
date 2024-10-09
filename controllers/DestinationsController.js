const beaches = [
    { name: "Xelha", location: "Cancun", rating: 4.5, freeAdmission: false, price: 50, kidFriendly: true},
    { name: "Santa Monica", location: "Los Angeles", rating: 4, freeAdmission: true, price: 0, kidFriendly: true },
    { name: "Kitsilano", location: "Vancouver", rating: 3, freeAdmission: true, price: 0, kidFriendly: true},
    { name: "Huntington Beach", location: "California", rating: 4, freeAdmission: true, price: 0, kidFriendly:true},
  ];

  const mountains = [
    { name: "Mt.Fuji", location: "Japan", rating: 5, freeAdmission: false, price: 10, kidFriendly: false},
    { name: "Mount Baker", location: "Washington", rating: 4, freeAdmission: true, price: 0, kidFriendly: true },
    { name: "Whistler Mountain", location: "British Columbia", rating: 4.5, freeAdmission: true, price: 0, kidFriendly: false },
    { name: "Dolomites", location: "Italy", rating: 5, freeAdmission: true, price: 0, kidFriendly: false },  
];

const camps = [
    { name: "Lake Louise", location: "Banff", rating: 5, freeAdmission: false, price: 40, kidFriendly: true},
    { name: "Garibaldi", location: "British Columbia", rating: 4.5, freeAdmission: true, price: 0, kidFriendly: false },
    { name: "Algonquin", location: "Ontario", rating: 4, freeAdmission: true, price: 0, kidFriendly: true},
    { name: "Joshua Tree", location: "California", rating: 4, freeAdmission: false, price: 30, kidFriendly: false},
  ];

  const allDestinations=[...beaches,...mountains,...camps]

// to filter destination by location
  const getDestinationByLocation=(req,res)=>{
    let destinationFound = allDestinations.filter((destination)=>{
        return destination.location.toLowerCase() === req.params.location.toLowerCase()
    })
    res.send(destinationFound)
  }

  //to filter destination by price 
  const getDestinationBySortedPrice=(req,res)=>{
      const sortOrder = req.query.order === "desc" ? "desc" : "asc"
    let destinationSorted = [...allDestinations].sort((a,b)=>{
        if (sortOrder === "asc"){
            return a.price-b.price
        } else {
            return b.price - a.price
        }
    })
    res.send(destinationSorted)
  }

// get destination by price range
const getDestinationByPriceRange =(req,res)=>{
    const minPrice = parseFloat(req.query.minPrice) || 0;
    const maxPrice = parseFloat(req.query.maxPrice) || Infinity

    let filteredDestinations = [...allDestinations].filter((destination)=>{
        return destination.price >= minPrice && destination.price <= maxPrice
    })
    res.send(filteredDestinations)
}

// get destination by rating
const getDestinationByRating=(req,res)=>{
    let destinationRatingFound = [...allDestinations].filter((destination)=>{
        return destination.rating >= 4
    })
    res.send(destinationRatingFound)
  }

  // get destination by kid friendliness 
  const getDestinationByKidFriendly=(req,res)=>{
    let destinationKidFriendlyFound=[...allDestinations].filter((destination)=>{
        return destination.kidFriendly === true
    })
    res.send(destinationKidFriendlyFound)
  }
  module.exports = {
    getDestinationByLocation,
    getDestinationBySortedPrice,
    getDestinationByPriceRange,
    getDestinationByRating,
    getDestinationByKidFriendly
  };