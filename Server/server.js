const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PortNo = 8000;
const connectionString = 'mongodb://127.0.0.1/ecommDataBase'
const cors = require('cors');
// const {isUserExisting} = require('./middleware')
const jwt = require('jsonwebtoken')
const secretText = '%6&%$***S^K'

mongoose.connect(connectionString,
    {useNewUrlParser:true,useUnifiedTopology:true}
    ).then(
        console.log('DB connected')
)

const productSchema = new mongoose.Schema({
    id:{
        type:Number,
    },
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    size:{
        type:String,
    },
    color:{
        type:String,
    },
    image:{
        type:String,
    },
    description:{
        type:String,
    },
    category:{
        type:String,
    }
})

const Product  = new mongoose.model('Product',productSchema)


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        required:true,
        type:String,
    },
    password:{
        type:String,
        required:true,
    }
})

const User = new mongoose.model('User',userSchema)


const corsOptions = {
    origin: 'http://localhost:5174', // Update this to match your client's origin
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

app.get('/allProducts',async(req,res)=>{
    const allProducts = await Product.find();
    res.setHeader('Content-Type', 'application/json');

    res.status(200).json({allProducts,success:true,msg:'successfull request'})
})


app.get('/product/:id',async(req,res)=>{
    const {id} = req.params
    const searchedProduct = await Product.findById(id)

    res.status(200).json({searchedProduct,success:true,msg:'Productfetchedsuccessfully'})
})




// ------------------------------------------- Middleware --------------------------------------------------

    // Add rourtes in different file middlewares in different file and main file will be different

const isUserExisting = async(req,res,next) =>{
    const {email} = req.body;
    const userExist = await User.findOne({ email: email });

    if (userExist) {
        res.status(401).json({
            msg: 'User already exists'
        });
    } else {
        // User doesn't exist, continue to the next middleware
        next();
    }
}

const findUser = async(req,res,next)=>{
    const {email} = req.body;
    const userExisting = await User.findOne({email:email})

    if(userExisting){
        next()
    }else{
        res.status(401).json({
            msg:'User doesnt exist'
        })
    }
}

//------------------------------------------------------------------------------------------------------------------





app.post('/auth/signup',isUserExisting,async(req,res)=>{
    const {username,email,password} = req.body;
    // console.log(req.body)
    const newUser = await User.create({username:username,email:email,password:password});

    res.status(200).json({
        newUser:newUser,
    })
})

app.post('/auth/signin',findUser,async(req,res)=>{

    const {email} = req.body;
    const user = await User.findOne({email:email})
    const {username} = user;
    const payload = {
        username:username,
        admin:true,
    }

    const token = jwt.sign(payload,secretText,{expiresIn:'10s'}) // change this with refresh token and httpOnly and according to tweets and add authorization to keep user logged in(YT)

    res.cookie('username',token,{httpOnly:true,maxAge:10000}).
    status(200).json({
        msg:'Signed in successfully'
    });
})

app.listen(PortNo,()=>{
    console.log(`Server started at port number ${PortNo}`);
})


module.exports = {Product,User};