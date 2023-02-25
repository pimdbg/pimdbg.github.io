import { useState } from 'react';
import { SlMenu, SlHome } from 'react-icons/sl';
import Socials from './Socials';

function Nav() {
    const [links, setLinks] = useState([
        {name: "Home", href: "/", icon: <SlHome color={"white"} />},
        {name: "About", href: "/#about", icon: <SlHome color={"white"} />},
        {name: "Projects", href: "/#projects"}
    ]);

    return (
        <div className="nav-bar">
            <div className="nav-wrapper">
                <nav className="nav">
                    <ul className="nav__menu nav-menu layout">
                        {
                            links.map((link, index) => (
                                <li key={index} className="nav-menu__item">
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <NavMobile />
        </div>
    );

    function NavMobile() {
        const [isOpened, setIsOpened] = useState(false);
        let transitionDuration = 300;

        return (
            <div className="nav-mobile-wrapper layout">
                
                {/* Menu button */}
                <button className="nav-mobile__btn" onClick={() => setIsOpened(! isOpened)}>
                    <SlMenu color={"white"} size={25} />
                </button>
                
                <nav className={"nav-mobile " + ((isOpened) ? "nav-mobile--opened" : "")} 
                    style={{ 
                        translate: (isOpened) ? 0 : "100vmax",
                        transition: `translate ${transitionDuration}ms ease-out` 
                    }}>
                    <ul className="nav-mobile__menu nav-menu layout">
                        {
                            links.map((link, index) => (
                                <li key={index} 
                                    className="nav-menu__item" 
                                    style={{ 
                                        translate: (isOpened) ? 0 : "100vmax",
                                        filter: `blur(${(isOpened) ? "0px" : "4px"})`,  
                                        transition: (isOpened) && `all 500ms ${ (transitionDuration + (index * 200)) }ms`,
                                    }}
                                >
                                    <a href={link.href} onClick={() => setIsOpened(false)}>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;