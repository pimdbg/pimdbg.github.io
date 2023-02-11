function Socials() {
    const links = [
        { icon: '/icons/linkedin.svg', href: 'https://www.linkedin.com/in/pim-dautzenberg-85582a237/'},
        { icon: '/icons/github.svg', href: 'https://github.com/pimdbg'}
    ];

    return (
        <div className="socials">
            <ul className="socials-list">
                {
                    links.map((link, index) => (
                        <li key={index} className="socials-item">
                            <a href={link.href} target="_blank">
                                <img src={link.icon} alt="" style={{ width: 40, height: 40 }} />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Socials;