const catchError = (req, res) => {
    res.send("404 - File not found");
  };
  
  module.exports = {
    catchError,
  };