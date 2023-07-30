const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const userRegisterSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    zipcode:{
        type:Number,
        required:true
    }
})

userRegisterSchema.pre('save',async function(next){
    this.password=await bcrypt.hash(this.password,10);
})

module.exports = mongoose.model('userRegSchema',userRegisterSchema);;