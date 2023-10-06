import { Request, Response } from "express";
import Student from "../model/student";



export const createStudent = async (req: Request, res: Response, next: () => void) => {
    const payload = req.body;
    try {
        const isExist = await Student.find({ grno: req.body.grno });
        if (isExist.length > 0) {
            res.status(400).json({
                code: 400,
                status: false,
                message: "Student is Already Admit",
                data: isExist[0],
            })
        } else {
            const newStudent = new Student(payload);
            await newStudent.save();
            res.status(200).json({
                code: 200,
                status: true,
                message: "Student created successfully",
                data: newStudent,
            });
        }
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: false,
            message: "Server Error",
            error,
        })
    }
    next();
}

export const getAllStudent = async (req: Request, res: Response, next: () => void) => {
    try {
        const newStudent = await Student.find({});
        res.status(200).json({
            code: 200,
            status: true,
            message: "Fetch All Student  successfully",
            data: newStudent,
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            status: false,
            message: "Server Error",
            error,
        })
    }
    next();
}