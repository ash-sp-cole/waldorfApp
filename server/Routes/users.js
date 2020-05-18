const express = require('express');
const User = require('../models/userModel');
const router = express.Router()



//get all

router.get('/',  async (req, res) =>{
try{

    const users = await User.find()
    res.json(users)
}
catch (err) {
        res.status(500).json({
            message:err.message

        })
         
}

})

// get one

router.get('/:id', getUser, (req, res)=>{
res.json(res.user)


})


// create one 


router.post('/:id', async (req, res)=>{
 
const user = new User({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    email: req.body.email
})
try {
    const newUser = await user.save()
    res.status(201).json(newUser)
}
catch (err){
    res.status(400).json({
        message: err.message
    })
}

})

// update one


// router.patch('/:id', getUser, (req, res)=>{
//     if(req.body.name != null){
//         res.user.name = req.body.name

//     }

    
// })



// delete one


router.delete('/:id',getUser, async (req, res)=>{
try{
    await res.user.remove()
    res.json({
        message:'deleted user'
    })
}
catch (err){resizeTo,status(500).json({
    message: err.message
})

}

    
})





async function getUser (req,res, next)
 {
     let user

    try {

            user = await User.findById(req.params.id)
            if(user == null) {
                return res.status(404).json({
                    message: "cannot find user "
                })
            }


    }
catch (err) {
    return res.status(500).json({
        message: err.message
    })
}

    res.user = user
    next()

 }




module .exports = router;