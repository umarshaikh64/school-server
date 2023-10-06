import { Request, Response } from "express";
import FeeModel from "../model/fee";



export const addFee = async (req: Request, res: Response, next: () => void) => {

    try {
        const fee = new FeeModel(req.body);
        await fee.save();
        res.status(200).json({
            code: 200,
            status: true,
            message: "Fee Submit Success",
            data: fee,
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: false,
            message: "Server Error",
            error,
        });
    }

    next();
}