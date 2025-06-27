const express=require('express')

const router=express.Router()

const {testlogin}=require('../controller/UserLogin')

router.get('/testlogin',testlogin)

module.exports=router;
