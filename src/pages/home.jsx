import { About } from "../components/about";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";

export const Home = () => {

    return <section className="home outer-wrapper">
        <div className="wrapper">
            <About />
            <Projects />
            <Contact />
        </div>
    </section>
}