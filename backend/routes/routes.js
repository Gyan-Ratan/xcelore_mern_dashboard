import express from 'express'
import { create, get, Updated, Delete } from '../controllers/usercontrollers.js'
import { Login } from '../controllers/Auth.js'
const routers = express.Router()

routers.post('/create', create)
routers.get('/get', get)
routers.put('/update/:id', Updated)
routers.delete('/delete/:id', Delete)
routers.post('/login', Login)





export default routers