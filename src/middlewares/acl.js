

function isAuthenticated() {
  return function (req, res, next) {
    /*
    If authenticated, next()
    else res.status(401).send
    */
  }
}

module.exports = {
  isAuthenticated
}
