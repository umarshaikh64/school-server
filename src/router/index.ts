import { Request, Response, Router } from "express";

const router: Router = Router();



router.get("/", (req: Request, res: Response) => {
    res.json({
        status: true,
        code: 200,
        message: "Ki & Kos Server is running,\n How may i Help you?"
    });
});

router.use("/admin",require("./admin"));
router.use("/student",require("./student"));
router.use("/fee",require("./fee"));







module.exports = router;