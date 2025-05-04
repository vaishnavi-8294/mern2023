import { useState } from "react";

export const Register = ()=>{
    const [user,setUser]=useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });
    // handling the input values
    const handleInput=(e)=>{
       console.log(e);
       let name=e.target.name;
       let value=e.target.value;
       setUser({
        ...user,
        [name]:value,

       })
    };
    //handling the form submit

    const handleSubmit=(e)=>{
        e.preventDefault();
       console.log(user);

    };
    return <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image">
                        <img src="/images/register.png" alt="registration image"  width="500" height="500"/>
                    </div>
                    {/* registration Form */}
                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Registration Form</h1>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username"  placeholder="username" id="username" value={user.username} onChange={handleInput} required autoComplete="off"/>
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email"  placeholder="Enter your email" id="email" value={user.email} onChange={handleInput} required autoComplete="off"/>
                            </div>
                            <div>
                                <label htmlFor="phone">phone</label>
                                <input type="number" name="phone"  placeholder="phone" id="phone" value={user.phone} onChange={handleInput} required autoComplete="off"/>
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password" name="password"  placeholder="password" id="password" value={user.password} onChange={handleInput}  required autoComplete="off"/>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-submit">Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
    
};