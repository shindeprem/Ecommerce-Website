// const {User} = require('./server')

// const isUserExisting = async(req,res,next) =>{
//     const {email} = req.body;
//     console.log(email)
//     const userExist = await User.findOne({ email: email });

//     if(!userExist){
//         next();
//     }

//     res.status(400).json({
//         msg:'User already exist'
//     })
// }

// module.exports = {isUserExisting}