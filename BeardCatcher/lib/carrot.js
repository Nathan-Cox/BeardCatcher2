const FallingObject = require("./falling_object");

class Chocolate extends FallingObject {
  constructor(options = {}) {
    options.good = false;
    options.src = "https://res.cloudinary.com/dufw1byqv/image/upload/v1607625508/samples/carrot_ivlrct.jpg";
    super(options);
  }
}

module.exports = Chocolate;
