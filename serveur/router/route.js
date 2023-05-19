import { Router } from "express";
const router = Router();

//import controllers
import * as controller from '../controllers/appController.js';
import { registerMail } from "../controllers/mail.js";
//token bearer authorize
import Auth, {localVariables}from '../middleware/auth.js';
/* POST */
router.route("/register").post(controller.register);
router.route("/registerMail").post(registerMail)//send email
router.route("/authenticate").post((req,res) => res.send());//authenticate user
router.route("/login").post(controller.verifyUser,controller.login);//login user

/* GET */

router.route('/user/:username').get(controller.getUser)//user whit username
router.route('/generateOTP').get( controller.verifyUser, localVariables, controller.generateOTP) // generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP)//verify generate OTP
router.route('/createRsetSession').get(controller.createResetSession)//reset all the variation


/* PUT */
router.route('/updateuser').put(Auth,controller.updateUser); //is use to update the user
router.route('/resetPassword').put(controller.verifyUser,controller.resetPassword); //is use to update the password

export default router;
