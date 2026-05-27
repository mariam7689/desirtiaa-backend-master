import express from 'express'
import { getAllClients } from './client.controller.js'
const clientRouter = express.Router()

clientRouter.get('/',getAllClients)