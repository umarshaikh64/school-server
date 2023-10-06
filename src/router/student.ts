import { Router } from "express";
import { getAllStudent } from "../controller/student";


const studentRoute: Router = Router();


studentRoute.get("/", getAllStudent);


module.exports= studentRoute;