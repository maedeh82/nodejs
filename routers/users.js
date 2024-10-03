const express=require('express')
let users = require("../users")
const router = express.Router()
router.use(express.json()); // اضافه کردن این خط برای پارس کردن JSON

router.get('/',(req , res)=>{
  res.json(users)

})

router.post('/', (req , res)=>{
  const newUser = req.body
    newUser.id = users.length+1
    users.push(newUser)
    res.status(200).json(newUser)
  })
module.exports = router

