const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },

  deliveryMan: {
    type: String,
  },
});

const User = model("User", UserSchema);

module.exports = User;
