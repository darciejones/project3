

const Joi = require('@hapi/joi');
//Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },

  email: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 255,
    unique: true
  },

  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30
  },

  zipcode: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 10
  }

}));

function validateUser(user) {

  const schema = {
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(4).max(255).required().email(),
    password: Joi.string().min(5).max(30).required(),
    zipcode: Joi.string().min(5).max(10).required(),
  };

  return Joi.validate(user, schema); 
}


exports.User = User;
exports.validate = validateUser; 














/* var mongoose = require("mongoose");


// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `name` must be unique and of type String
  StudentID: Number,
  password: String,
  School: String,
  EnrollingParent: String,
  Tutor: String,
  


  // `notes` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Note model
  // This allows us to populate the User with any associated Notes
  info: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "info"
    }
  ]
});


// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User; */