import { Router } from "express";
import { addAdmins, loginAdmin } from "../controller/admin";

const adminRouter: Router = Router();

adminRouter.get("/createAdmin", addAdmins);
adminRouter.post("/login", loginAdmin);


module.exports = adminRouter;
