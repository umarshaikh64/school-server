import { Router } from "express";
import { addFee } from "../controller/fee";

const feeRouter: Router = Router();

feeRouter.post("/add",addFee);

module.exports = feeRouter;
