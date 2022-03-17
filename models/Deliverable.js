
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverableSchema = new Schema({
Underscoreid:String , 


delName:String , 


delDuedate:String , 


delStatus:String 



})

module.exports = {
  Deliverable : mongoose.model('deliverable', deliverableSchema),
}

