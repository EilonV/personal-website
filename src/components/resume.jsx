import resume from '../assets/documents/Eilon Vana.pdf'

export const Resume = () => {
    return <section className="resume section">
        <div className="top content">
            <p>Currently working as a freelancer front-end developer in creating static websites and portfolios</p>
            <p>I have worked for 2 years with a wide spectrum of customers from designers who created their own design for me to translate into code and customers which i designed and coded the website for them.</p>
        </div>
        <h2>RESUME</h2>
        <div className="bottom content">
            <a href={resume} download="Eilon Vana resume.pdf">Download resume</a>
            <a href="https://drive.google.com/file/d/1J-BWjTsSnGOjxxWSlNiHLllHn_GtI06W/view?usp=sharing" target='noopener'>View pdf</a>
        </div>
    </section>
}