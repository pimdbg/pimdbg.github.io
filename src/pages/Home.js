import Nav from '../components/Nav';
import Socials from '../components/Socials';
import Hexagon from '../components/Hexagon';
import Observer from '../components/Observer';
import { SiJavascript, SiPhp, SiLaravel, SiWordpress, SiElectron } from 'react-icons/si';

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
            <main>

                <Observer>
                    <section className="intro layout" style={{textAlign: "center"}}>
                        <h2 className="intro__title">Frontend, Backend, SEO</h2>
                        <p>
                            Web Developer in Limburg, The Netherlands.
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
                
                <section className="layout">
                    <h2>Placeholder content</h2>
                </section>
            </main>
        </div>
    );
}