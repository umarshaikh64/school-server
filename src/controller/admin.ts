import { Request, Response } from "express";
import AdminModel from "../model/admin";
import { AdminLogin } from "../interface/admin";




export const addAdmins = async (req: Request, res: Response, next: () => void) => {

    try {
        const admins = await AdminModel.insertMany([
            { email: "admin@gmail.com", password: "12345678", adminType: 2 },
            { email: "superAdmin@gmail.com", password: "12345678", adminType: 1 }
        ]);
        res.status(200).json({
            status: true,
            code: 200,
            data: admins,
            message: "Admin created success"
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            code: 500,
            error: error
        })
    }

    next();
}


export const loginAdmin = async (req: Request, res: Response) => {
    const payload: AdminLogin = {
        email: req.body.email,
        password: req.body.password
    }
    try {
        const admin = await AdminModel.find(payload);
        if (admin.length > 0) {
            if (admin[0].status) {
                res.status(200).json({
                    status: true,
                    code: 200,
                    message: "Admin login success",
                    data: admin[0]
                })
            } else {
                res.status(401).json({
                    status: false,
                    code: 401,
                    message: "Supper admin blocked your account, please contact to support",
                });
            }
        } else {
            res.status(404).json({
                status: false,
                code: 404,
                message: "Admin can not find, please contact to support"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            code: 500,
            error: error
        });
    }
}

export async function isLoggedIn(req: Request, res: Response, next: () => void) {
    const token = req.header("adminId");
    try {
        const isSuperAdmin = await AdminModel.findById(token);
        if (isSuperAdmin) {
            if (isSuperAdmin.status) {
                if (isSuperAdmin.adminType == 1) {
                    next();
                } else {
                    res.status(400).json({
                        status: false,
                        code: 400,
                        message: "the admin is not super admin,please contact to support",
                    });
                }
            } else {
                res.status(401).json({
                    status: false,
                    code: 401,
                    message: "Supper admin blocked your account, please contact to support",
                });
            }
        } else {
            res.status(404).json({
                status: false,
                code: 404,
                message: "Super Admin can not find, please contact to support"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            code: 500,
            error: error
        });

    }
}
export async function isAdmin(req: Request, res: Response, next: () => void) {
    const token = req.header("adminId");
    try {
        const isSuperAdmin = await AdminModel.findById(token);
        if (isSuperAdmin) {
            if (isSuperAdmin.status) {
                next();
            } else {
                res.status(401).json({
                    status: false,
                    code: 401,
                    message: "Supper admin blocked your account, please contact to support",
                });
            }
        } else {
            res.status(404).json({
                status: false,
                code: 404,
                message: "Super Admin can not find, please contact to support"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            code: 500,
            error: error
        });

    }
} 
