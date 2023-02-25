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
                    <h3 className="welcome__subtitle">Welcome</h3>
                    <p className="welcome__description">
                        My name is Pim Dautzenberg, <br />
                        I am a Full Stack Web Developer in Limburg, The Netherlands.
                    </p>
                    <Socials />
                </div>
            </header>
            <main style={{ paddingBottom: 50 }}>

                <Observer>
                    <section id="about" className="intro layout">
                        <h2 className="intro__title">About me</h2>
                        <p className="intro__text text-block">
                            I am a Web Developer, familiar with both Frontend and Backend.
                            I take a lot of joy in developing websites and web-applications. Creating customized solutions, building from scratch or providing Search Engine Optimalization.
                            Mostly I work with JavaScript, Php and of course other frequently used web-based languages.
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
                
                <section id="projects" className="projects layout">
                    <Observer>
                        <h3 className="projects__title">My Projects</h3>
                    </Observer>
                    <Observer>
                        <section className="project">
                            <h4>Earthquake Map</h4>
                            <p className="project__description text-block">
                                Built as a school assignment 2021, this webapplication provides data about recorded earthquakes.
                                This application collects all data via an API, then visualises it on a map.
                                Making use of several filters and other functions to provide more specific search results for the user.
                            </p>
                            <ul className="project__keywords-list">
                                <li className="project_keyword">JavaScript</li>
                                <li className="project_keyword">jQuery</li>
                            </ul>
                            <a href="https://github.com/pimdbg/quaketrack" target="_blank" className="project__link btn">Go to source code</a>
                        </section>
                    </Observer>
                </section>
            </main>
            <Footer />
        </div>
    );
}