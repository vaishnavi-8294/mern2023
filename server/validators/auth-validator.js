const {z}= require("zod");
const signupSchema=z.object({
    username: z 
    .string({required_error:"Name is Required"}).trim()
    .min(3,{message:"name must be atleast 3 chars"})
    .max(255,{message:"Name must not be more than "}),
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"email must be atleast of 3 character"})
    .max(255,{message:"Email not must be more than 255 character"}),
    phone: z 
    .string({required_error:"phone is required"})
    .trim()
    .min(10,{message:"phone must be atleast 10 character"})
    .max(20,{message:"phone must not be more than 20 charcter"}),
    password: z
    .string({required_error:"Password is required"})
    .min(7,{message:"Password must be atleast 7 character"})
    .max(1024,{message:"Password must not be more than 1024 character"}),
    

});
module.exports = {signupSchema};

