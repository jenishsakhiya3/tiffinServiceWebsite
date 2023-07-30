const mongoose=require("mongoose");
const bcrypt=require("bcrypt");


const restRegSchema =new mongoose.Schema({
    restname:{
        type:String,
        required:true,
        lowercase:true,
    },
    restaddress:{
        type:String,
        required:true,
        lowercase:true,
    },
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
    },
    contact:{
        type:Number,
        required:true,
        length:10
    },
    types:{
        type:[String],
        required:true,
    },
    items:{
        type:[String],
        required:true,
        lowercase:true,
    },
    image:{
        data:Buffer,
        type: String,
        required:true
    }
})

restRegSchema.pre('save',async function(next){
    this.password=await bcrypt.hash(this.password,10);
})

module.exports = mongoose.model('restRegSchema',restRegSchema);;