const express = require("express");
const cors = require("cors")
const beachController = require("./controllers/BeachController.js")
const mountainController = require("./controllers/MountainController.js")
const campingController = require("./controllers/CampingController.js")
const catchErrorController = require("./controllers/CatchErrorController.js")
const destinationController = require("./controllers/DestinationsController.js")
const PORT = process.env.PORT || 3002;

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my page!");
});

app.get('/beaches', beachController.getBeaches)
app.get('/beaches/:id', beachController.getBeach)
app.get('/beaches/name/:id', beachController.getBeachByName)
app.get('/beaches/location/:location', beachController.getBeachByLocation)

app.get('/mountains', mountainController.getMountains)
app.get('/mountains/:id', mountainController.getMountain)
app.get('/mountains/name/:id', mountainController.getMountainByName)
app.get('/mountains/location/:location', mountainController.getMountainByLocation)

app.get('/camps', campingController.getCamps)
app.get('/camps/:id', campingController.getCamp)
app.get('/camps/name/:id', campingController.getCampByName)
app.get('/camps/location/:location', campingController.getCampByLocation)

app.get('/destinations/price-range', destinationController.getDestinationByPriceRange)
app.get('/destinations/kid-friendly',destinationController.getDestinationByKidFriendly)
app.get('/destinations/rating', destinationController.getDestinationByRating)
app.get('/destinations/price', destinationController.getDestinationBySortedPrice)
app.get('/destinations/:location', destinationController.getDestinationByLocation)

//catch error route
app.get("/*", catchErrorController.catchError);