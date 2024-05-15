import { About } from "../components/about";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";
import { Resume } from "../components/resume";

export const Home = () => {

    return <section className="home outer-wrapper">
        <span className="back"></span>
        <div className="wrapper">
            <About />
            <Projects />
            <Resume />
            <Contact />
        </div>
    </section>
}