import { Router } from "express";
const router = Router();

/* POST */
router.route("/register").post((req,res) => res.json('register route'));
/* GET */
/* PUT */

export default router;
