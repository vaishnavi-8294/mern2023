

export const Home =()=>{
    return <>
    <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols" >
                <div className="hero-content">
                    <p>We are the world best IT company</p>
                    <h1>Welcome to DevWith Vashu</h1>
                    <p>
                        Are you ready to take your business to the next level with cutting-edge
                        IT solutions? look no further! At Vaishnavi Technical, we Specialize in providing innovative 
                        IT services and solutions trilored to meet your unique needs,
                    </p>
                    <div className="btn btn-group">
                        <a href="/contact">
                            <button className="btn">connect Now</button>
                        </a>
                        <a href="/services">
                            <button className="btn-secondry"> learn more</button>
                        </a>
                    </div>
                </div>
                {/* hero images */}
                <div className="hero-image">
                    <img src="/images/home.jpeg" alt="coding together" width="400" height="400" />
                </div>

            </div>

        </section>
    </main>

    {/* 2nd Section */}
    <section className="section-analytics">
        <div className="container grid grid-four-cols">
            <div className="div1">
                <h2>50+</h2>
                <p>registerd companies</p>
            </div>
            <div className="div1">
                <h2>10000+</h2>
                <p>Happy Clients</p>
            </div>
            <div className="div1">
                <h2>500</h2>
                <p>Well known developers</p>
            </div>
            <div className="div1">
                <h2>24</h2>
                <p>service</p>
            </div>
        </div>
    </section>

    {/* 3rd Section  */}
    <section className="section-hero">
            <div className="container grid grid-two-cols" >
                {/* hero images */}
                <div className="hero-image">
                    <img src="/images/homee.jpg" alt="coding together" width="400" height="400" />
                </div>
                <div className="hero-content">
                    <p>We are here to help you </p>
                    <h1>Get started Today</h1>
                    <p>
                    Welcome to the Learning Web Development course! This course is designed for anyone who wants to 
                    start their journey into web development, whether you're a complete beginner or someone looking 
                    to refresh their skills. You'll begin by understanding the basics of how the web works and then 
                    move on to learning HTML, the language used to structure web pages. From there, you’ll explore
                     CSS to style your pages and make them visually appealing, followed by an introduction to JavaScript
                      to add interactivity and functionality. The course is structured step-by-step, guiding you through
                       the essential technologies and helping you build your first website by the end. All you need to get 
                       started is a modern web browser, a code editor like Visual Studio Code, and a passion for learning. 
                       Practice regularly, don’t hesitate to experiment, and remember that asking questions is part of the process.
                        Get ready to dive in and start building the web!


                    </p>
                    <div className="btn btn-group">
                        <a href="/contact">
                            <button className="btn">Get Started</button>
                        </a>
                        <a href="/services">
                            <button className="btn-secondry"> learn more</button>
                        </a>
                    </div>
                </div>
                

            </div>

        </section>
       
    </>
};