const mongoose = require ("mongoose") ; 

// 2 -connect DB 
const connectDB = async () => {
    try {
        //step1 
        await mongoose.connect(process.env.DB_URI) ; 
        console.log('database connected')
        
    } catch (error) {
        console.log("failed to connect " , error )
        
    }
} 

module.exports = connectDB ;
