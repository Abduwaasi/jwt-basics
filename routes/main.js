import express from 'express'
const router = express.Router()

import { login, dashboard } from "../controllers/main.js"
import authenticationMiddlewware from '../middlewares/auth.js'

router.route('/login').post(login)
router.route('/dashboard').get(authenticationMiddlewware, dashboard)


export default router