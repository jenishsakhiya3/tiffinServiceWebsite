const bodyParser = require("body-parser");
const express =require("express");
const path=require("path");
const app=express();
const user_reg_schema=require('./Database/userRegScema');
const rest_reg_schema=require('./Database/restRegScema');
const bcrypt=require("bcrypt");
require('./Database/mongoConnect');

app.use(express.static(path.join(__dirname,'../public')));

const tempPath=path.join(__dirname,'../views');

app.set("view engine","ejs");
app.set("views",tempPath);

app.use(bodyParser.urlencoded({ 
    extended:false
}));

app.use(express.json());

app.get('/restaurantPage',async (req,res)=>{
    rest_reg_schema.find({}).then((data)=>{
        res.render('restaurantPage',{'restData':data});
    }).catch((err)=>{
        console.log(err);
    })
});


app.get('/firstPage',(req,res)=>{
    res.redirect(path.join(__dirname, '../src', 'firstPage'));
});


app.get('/homePageUser',(req,res)=>{
    res.render('homePageUser');
});

app.get('/homePageRest',(req,res)=>{
    res.render('homePageRest');
});

app.get('/restOrder',(req,res)=>{
    res.render('restOrder');
});

app.get('/myAccount',(req,res)=>{
    res.render('myAccount');
});

app.get('/foodPage',(req,res)=>{
    res.render('foodPage');
})

app.get('/servicePage',(req,res)=>{
    res.render('servicePage');
})

//-------------Login And Registration for User------------------------------

app.post('/userReg',async (req,res)=>{
    var myData = new user_reg_schema(req.body);
    myData.save();
    res.render('homePageUser');
});

app.post('/userLog',async (req,res)=>{
    let username=await user_reg_schema.findOne({username:req.body.username});
    if(username!=null){
        const hashTopass=await bcrypt.compare(req.body.password,username.password);
        if(hashTopass){
            res.render('homePageUser');
        }
        else{
            res.send("Username and Password not match");
        }
    }
    else{
        res.send("User Already Exists");
    } 
});

//-------------Login And Registration for Restaurent------------------------------

app.post('/restReg',async (req,res)=>{
    var myDataRest = new rest_reg_schema(req.body);
    req.body.items=req.body.items.split(',');
    await myDataRest.save(); 
    res.render('homePageRest');
});

app.post('/restLog',async (req,res)=>{
    let username=await rest_reg_schema.findOne({username:req.body.username});
    if(username!=null){
        const hashTopass=await bcrypt.compare(req.body.password,username.password);
        if(hashTopass){
            res.render('homePageRest');
        }
        else{
            res.send("Username and Password not match");
        }
    }
    else{
        res.send("User Already Exists");
    } 
});


app.listen(3000,()=>{
    console.log("Server is Running");
});