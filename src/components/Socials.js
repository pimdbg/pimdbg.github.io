import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

function Socials() {
    const links = [
        { icon: <BsLinkedin className="socials-item__icon" />, href: 'https://www.linkedin.com/in/pim-dautzenberg-85582a237/'},
        { icon: <FaGithub className="socials-item__icon" />, href: 'https://github.com/pimdbg'}
    ];

    return (
        <div className="socials">
            <ul className="socials-list">
                {
                    links.map((link, index) => (
                        <li key={index} className="socials-item">
                            <a href={link.href} target="_blank">
                                {link.icon}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Socials;