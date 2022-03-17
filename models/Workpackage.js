
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workpackageSchema = new Schema({
Underscoreid:String , 


wpPms:String , 


wpName:String , 


wpRole:String 



})

module.exports = {
  Workpackage : mongoose.model('workpackage', workpackageSchema),
}

