//VEDIO MODEL
const  mongoose= require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const Vedioschema = new Schema({
  title: String,
  url: String,
  description: String,
});
//Create vedio model from above schema
module.exports=mongoose.model('vedio',Vedioschema,'vedios');

