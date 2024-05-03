const express = require("express"); 

const router = express.Router() ; 
 
const Contact = require("../Model/Contact");



// add contact 
router.post("/add", async (req , res) => {
    try {
        const { name , email , phone } = req.body ; 
        const newContact = new contact (  { name , email , phone } ) ; 
        await newContact.save(); 
        res.status(200).send("contact add succefully..", newContact ); 
    } catch (error) {
       res.status(400).send("failed to add...", error) 
    }
})

// getall contact 
router.get("/getall" , async (req, res)=> {
    try {
        const listContact = await Contact.find ()
        res.status(200).send ("this is list of all contact " , listContact)
    } catch (error) {
        res.status(400).send("list not found ...", error) 

    }
})

// get one contact 
router.get("/:id" , async (req, res )=> {

    try {
        const ContactToGet = await Contact.findOne ({_id :req.params.id})
        res.status(200).send ("This is the contact " , ContactToGet) 

    } catch (error) {
        res.status(400).send("Contact  not found ...", error) 
    
    }
})
// delete contact 
router.delete("/:id", async (req,res)=> {
    try {
        const {_id} = req.params ; 
        await Contact.findOneAndDelete({_id}) ;
        res.status(200).send ("Contact deleted  " ) 


    } catch (error) {
        res.status(400).send(" not delete this contact ", error) 

    }
})
// update contact 
router.put ("/:_id" , async ( req,res)=> {
    try {
        const {_id}= req.params ;
        await Contact.updteOne ({_id},  {  $set :{ ...req.body}})
         res.status(200).send ("Contact updated " , )

    } catch (error) {
        res.status(400).send(" contact NOT Updated  ", error) 
   
    }
})

module.exports = router  