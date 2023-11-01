const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PortNo = 8000;
const connectionString = 'mongodb://127.0.0.1/ecommDataBase'
const cors = require('cors');

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
    origin: 'http://localhost:5173', // Update this to match your client's origin
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

app.listen(PortNo,()=>{
    console.log(`Server started at port number ${PortNo}`);
})

module.exports = Product;