export default function Info(){
    return(
        <section>
            <div className="profile_picture">
                <img src="./images/dp.png"/>
            </div>
        
            <div className="profile_info">
                <h1>Franklin Obiukwu</h1>
                <p>Software Engineer</p>
                <p>franklinobiukwu.com</p>
            </div>
        <div className="profile_buttons">
            <button><span><img src="./images/email.png" /></span>Email</button>
            <button><span><img src="./images/linkedin.png" /></span>LinkedIn</button>
        </div>
        </section>
    )
}
