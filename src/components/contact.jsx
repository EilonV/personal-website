export const Contact = () => {

    const handleInputs = (e) => {
        e.preventDefault()
        const sub = e.target[0].value
        const body = e.target[1].value
        openDefaultEmailClient(sub, body)
    }
    const openDefaultEmailClient = (subject, body) => {
        const mailtoUrl = `mailto:contact@eilonvana.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    }

    return <section className="contact-wrapper section">
        <div className="contact">
            <div className="contact-ways">
                <a href="https://github.com/EilonV" target="noopener" className="way">
                    <div className="way-content">
                        <i className="fa-brands fa-github"></i>
                        <p>Github</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/eilonvana/" target="noopener" className="way">
                    <div className="way-content">
                        <i className="fa-brands fa-linkedin"></i>
                        <p>Linkedin</p>
                    </div>
                </a>
                <a href="mailto:contact@eilonvana.dev" target="noopener" className="way">
                    <div className="way-content">
                        <i className="fa-regular fa-envelope"></i>
                        <p>Email</p>
                    </div>
                </a>
                <a href="https://api.whatsapp.com/send?phone=972546630092&text=Hey%20im%20just%20coming%20from%20your%20website!" target="noopener" className="way">
                    <div className="way-content">
                        <i className="fa-brands fa-whatsapp"></i>
                        <p>Whatsapp</p>
                    </div>
                </a>
                <a href="tel:+972546630092" target="noopener" className="way">
                    <div className="way-content">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                        <p>Phone</p>
                    </div>
                </a>
            </div>
            <form action="email" target="noopener" className="flex" onSubmit={handleInputs}>
                <div className="inputs flex column">
                    <input type="text" placeholder="Email title" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Email content"></textarea>
                </div>
                <button>send</button>
            </form>
            <div className="label">
                <div className="color">  </div>
                <h2>CONTACT</h2>
            </div>
        </div>
    </section>
}