import express,{Router} from 'express';
import { sendData } from '../controller/send-data-controller.js'
import {addUser,getUsers,getUser,editUser,deleteUser} from '../controller/user-controller.js'


const router=express.Router()


router.post('https://emailer-api.onrender.com/senddata', sendData);
router.post('https://emailer-api.onrender.com/add',addUser)
router.get('https://emailer-api.onrender.com/',getUsers)
router.get('https://emailer-api.onrender.com/:id',getUser)
router.post('https://emailer-api.onrender.com/:id',editUser)
router.delete('https://emailer-api.onrender.com/:id',deleteUser)

  

export default router
