const express=require('express')

const router=express.Router()

const {testcontact}=require('../controller/UseContact')

router.get('/testcontact',testcontact)

module.exports=router;