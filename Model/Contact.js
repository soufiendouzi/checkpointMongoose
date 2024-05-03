// require mongoose 
const mongoose = require ("mongoose") ; 

// create schema 
const schema = mongoose.Schema 
const contactSchema = new schema ({

    name : {
        type : String ,
        required : true
    }, 
    email : {
        type: string , 
        required : true , 
        unique : true 
    }, 
})
module.exports = Contact = mongoose.moodel("contact", contactSchema)