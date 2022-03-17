
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
Underscoreid:String , 


tname:String , 


sdate:String , 


edate:String , 


vpms:Number , 


tdescription:String 



})

module.exports = {
  Tasks : mongoose.model('tasks', tasksSchema),
}

