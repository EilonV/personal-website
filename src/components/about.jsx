import me from '../assets/images/me-compressed.jpg'

export const About = () => {
    const age = Math.floor((Date.now() - Date.parse('26 oct 1995')) / (1000 * 60 * 60 * 24 * 365));

    return <section className="about section">
        <div className="top-row">
            <img src={me} alt="" className="img" draggable="false" />
            <div className="title">
                <div>
                    <h1>Eilon Vana</h1>
                    <h2>Front-end Developer</h2>
                    <p className="education">Coding Academy 2022</p>
                </div>
                <p>
                    Hey there! I'm Eilon, a {age} year-old Front-end developer with a passion for
                    coding, designing,
                    and all things art-related.
                    Looking for my first position as a Front-end developer,
                    eager to learn and show my skills!
                </p>
                <div className="flex column align-center justify-center">
                    <ul>
                        <li>JavaScript</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                        <li>ReactJS</li>
                        <li>SCSS (Sass)</li>
                        <li>Redux</li>
                        <li>Axios</li>
                        <li>Git</li>
                        <li>jQuery</li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
        </div>
    </section>
}