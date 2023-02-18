import NavBar from '../components/NavBar';
import Socials from '../components/Socials';
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
                        I am a Full Stack Web Developer in Limburg, The Netherlands.<br /><br />
                        Visit my Github for some projects
                    </p>
                    <Socials />
                </div>
            </header>
            <main className="layout">

                <section className="intro" style={{textAlign: "center"}}>
                    <h2 className="intro__title">Frontend, Backend, SEO</h2>
                    <p>
                        Web Developer in Limburg, The Netherlands.
                        <p>ewfrg</p>
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

function Hexagon(props) {
    const { size = 100 } = props;

    return (
        <div className="hexagon" style={{ width: size, height: size }}>
            <div className="hexagon__image-wrapper">
                <img src="/icons/hexagon.svg" alt="" className="hexagon__image" />
            </div>

            <div className="hexagon__content-wrapper">
                <div className="hexagon__content">
                    {props.children}
                </div>    
            </div>
        </div>
    );
}