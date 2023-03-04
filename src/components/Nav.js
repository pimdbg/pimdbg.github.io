import { useState } from 'react';
import { SlMenu, SlHome } from 'react-icons/sl';
import { RxCross2 } from 'react-icons/rx';
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
                    <SlMenu color={"white"} size={25} 
                        style={{ 
                            translate: isOpened ? '100vw' : 0, 
                            blur: isOpened ? '4px' : 0, 
                            transition: "all 250ms",
                            position: "absolute",
                            top: 0
                        }}
                    />
                    <RxCross2 color={"white"} size={25} 
                        style={{ 
                            translate: ! isOpened ? '100vw' : 0, 
                            blur: ! isOpened ? '4px' : 0, 
                            transition: "all 250ms",
                            position: "absolute",
                            top: 0
                        }}
                    />
                </button>
                
                <nav className={"nav-mobile " + ((isOpened) ? "nav-mobile--opened" : "")} 
                    style={{ transition: `translate ${transitionDuration}ms ease-out` }}>

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