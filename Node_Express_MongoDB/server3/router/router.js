import express from "express"
import { GetHome, GetAnotherRoute } from "../controller/controller.js"

let router = express.Router()

router.get("/", GetHome)

router.get("/another-route", GetAnotherRoute)

export default router