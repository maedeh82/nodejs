



const mongoose = require ('mongoose')
 const userSchema = mongoose.Schema({
  first_name:{type:String,required:true},
  last_name:{type:String,required:true},
  email:{type:String,required:true}
 })
 const user = mongoose.model("User",userSchema)
 module.exports=user

