const express=require("express");
const router =express.Router();
const authcontroller=require("../controllers/auth-controller");
// If you kept: module.exports = signupSchema;
const {signupSchema} = require("../validators/auth-validator");

const validate = require("../middleware/validate-middleware");

// router.get("/",(req,res)=>{
//     res.status(200).send("welcome to world best series by vaishnavi technical using router");
// });
router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema),authcontroller.register);
router.route("/login").post(authcontroller.login);
module.exports=router;
