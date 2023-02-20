import NavBar from '../components/NavBar';
import Socials from '../components/Socials';
import Hexagon from '../components/Hexagon';
import { SiJavascript, SiPhp, SiLaravel, SiWordpress, SiElectron } from 'react-icons/si';

export default function Home() {
    return (
        <div id="container">
            <NavBar />
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

                <section className="intro layout" style={{textAlign: "center"}}>
                    <h2 className="intro__title">Frontend, Backend, SEO</h2>
                    <p>
                        Web Developer in Limburg, The Netherlands.
                    </p>
                </section>
                

                <section className="hexagon-grid">    
                
                    <div className="hexagon-grid__row">
                        <Hexagon icon={<SiJavascript size="150px"/>} className={"hexagon-grid__item"} />
                        <Hexagon icon={<SiPhp size="150px"/>} className={"hexagon-grid__item"} />
                        <Hexagon icon={<SiLaravel size="150px"/>} className={"hexagon-grid__item"} />
                    </div>
                    <div className="hexagon-grid__row hexagon-grid__row-even">
                        <Hexagon icon={<SiWordpress size="150px"/>} className={"hexagon-grid__item"} />
                        <Hexagon icon={<SiElectron size="150px"/>} className={"hexagon-grid__item"} />
                    </div>
                
                </section>
            </main>
        </div>
    );
}