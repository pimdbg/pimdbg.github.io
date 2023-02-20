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
                

                <section className="skills">    
                
                <Hexagon size={"25vw"}>
                    <SiJavascript size={100}/>
                </Hexagon> 

                <Hexagon size={"25vw"}>
                    <SiPhp size={100}/>
                </Hexagon> 

                <Hexagon size={"25vw"}>
                    <SiLaravel size={100}/>
                </Hexagon>

                <Hexagon size={"25vw"}>
                    <SiWordpress size={100}/>
                </Hexagon>

                <Hexagon size={"25vw"}>
                    <SiElectron size={100}/>
                </Hexagon>
                </section>
            </main>
        </div>
    );
}