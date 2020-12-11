const FallingObject = require("./falling_object");

class Bone extends FallingObject {
  constructor(options = {}) {
    options.good = true;
    options.src = "https://res.cloudinary.com/dufw1byqv/image/upload/v1607625505/samples/bacon_g5nd4z.png";
    super(options);
  }
}


