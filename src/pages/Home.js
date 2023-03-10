import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Socials from '../components/Socials';
import Hexagon from '../components/Hexagon';
import Observer from '../components/Observer';
import { SiJavascript, SiPhp, SiLaravel, SiWordpress, SiElectron, SiCss3, SiReact, SiTailwindcss } from 'react-icons/si';

export default function Home() {
    return (
        <div id="container">
            <Nav />
            <header className="welcome layout">
                <div className="welcome__content">
                    <h1 className="welcome__title highlight">Hello there</h1>
                    <h2 className="welcome__subtitle">Welcome</h2>
                    <p className="welcome__description">
                        My name is Pim Dautzenberg, <br />
                        I am a Full Stack Web Developer in Limburg, The Netherlands.
                    </p>
                    <Socials />
                </div>
            </header>
            <main className="main">

                <Observer>
                    <section id="about" className="intro layout">
                        <h2 className="intro__title">About me</h2>
                        <p className="intro__text text-block">
                            I am a <strong>Web Developer</strong>, familiar with both Frontend and Backend.
                            I take a lot of joy in developing websites and web-applications. Creating customized solutions, building from scratch or providing Search Engine Optimalization.
                            Mostly I work with <strong>JavaScript</strong>, <strong>Php</strong> and of course other frequently used web-based languages.
                        </p>
                    </section>
                </Observer>
                

                <section className="hexagon-grid">    
                
                    <div className="hexagon-grid__row">
                        <Hexagon icon={<SiJavascript className="hexagon__icon" size="150px"/>} className={"hexagon-grid__item"} />
                        <Hexagon icon={<SiPhp className="hexagon__icon" size="150px"/>} className={"hexagon-grid__item"} />
                        <Hexagon icon={<SiLaravel className="hexagon__icon" size="150px"/>} className={"hexagon-grid__item"} />
                    </div>
                    <div className="hexagon-grid__row hexagon-grid__row-even">
                        <Hexagon icon={<SiWordpress className="hexagon__icon" size="150px"/>} className={"hexagon-grid__item"} />
                        <Hexagon icon={<SiElectron className="hexagon__icon" size="150px"/>} className={"hexagon-grid__item"} />
                    </div>
                    <div className="hexagon-grid__row">
                        <Hexagon icon={<SiCss3 className="hexagon__icon" size="150px"/>} className={"hexagon-grid__item"} />
                        <Hexagon icon={<SiReact className="hexagon__icon" size="150px"/>} className={"hexagon-grid__item"} />
                        <Hexagon icon={<SiTailwindcss className="hexagon__icon" size="150px"/>} className={"hexagon-grid__item"} />
                    </div>

                </section>
                
                <Projects />

            </main>
            <Footer />
        </div>
    );

    function Projects() {
        let projects = [
            { 
                title: "Earthquake Map", 
                description: "Built as a school assignment 2021, this webapplication provides data about recorded earthquakes. This application collects all data via an API, then visualises it on a map. Making use of several filters and other functions to provide more specific search results for the user.",
                keywords: ["JavaScript", "jQuery"],
                links: [
                    { label: "Go to source code", href: "https://github.com/pimdbg/quaketrack" }
                ]
            },
            {
                title: "Membership Admin Panel", 
                description: "This application creates an admin panel to easily control memberships of an sports association. Initally Created as an end project for a school assignment. Built with the PHP Laravel framework",
                keywords: ["PHP", "Laravel", "AlpineJS"],
                links: [
                    { label: "Go to source code", href: "https://github.com/pimdbg/Membership-Admin-Panel" }
                ]
            }
        ];

        return (
                <section id="projects" className="projects layout">
                    <Observer>
                        <h3 className="projects__title">My Projects</h3>
                    </Observer>
                    <section className="projects__grid">
                            {
                                projects.map((project, index) => (
                                    <Observer key={index}>
                                        <section className="project">
                                            <h4>{project.title}</h4>

                                            <p className="project__description text-block">
                                                {project.description}
                                            </p>
                                            
                                            {
                                                project.keywords && (
                                                    <ul className="project__keywords-list">
                                                        {
                                                            project.keywords.map((keyword, index) => (
                                                                <li key={index} className="project_keyword">{keyword}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }

                                            {
                                                project.links && project.links.map((link, index) => (
                                                    <a key={index} href={link.href} target="_blank" className="project__link btn">{link.label}</a>
                                                ))
                                            }
                                        </section>
                                    </Observer>
                                ))
                            }
                    </section>
                </section>
        )
    }
}