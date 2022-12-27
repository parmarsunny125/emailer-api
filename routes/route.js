import express,{Router} from 'express';
import { sendData } from '../controller/send-data-controller.js'
import {addUser,getUsers,getUser,editUser,deleteUser} from '../controller/user-controller.js'


const router=express.Router()


router.post('/senddata', sendData);
router.post('/add',addUser)
router.get('/all',getUsers)
router.get('/:id',getUser)
router.post('/:id',editUser)
router.delete('/:id',deleteUser)

  

export default router
