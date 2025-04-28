const express=require("express");
const router =express.Router();
const authcontroller=require("../controllers/auth-controller");

// router.get("/",(req,res)=>{
//     res.status(200).send("welcome to world best series by vaishnavi technical using router");
// });
router.route("/").get(authcontroller.home);
router.route("/register").post(authcontroller.register);
module.exports=router;
