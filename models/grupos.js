var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema =  Schema({
  id:Number,
  Grupo:String,
  Genero:String,
  Integrantes:String,
  Link:String,
  Fundacion:Number
});

module.exports = mongoose.model('User', UserSchema);