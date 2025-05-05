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
    </>
};