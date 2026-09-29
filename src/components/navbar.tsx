import {navLinks} from "../constants";
import {useEffect, useState} from "react";

const Navbar = () => {
    const [scrolled,setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled)
        }

        handleScroll()

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className={`navbar ${scrolled? 'scrolled' : 'not-scrolled'}`}>
            <div className={"inner"}>
                <a className={"logo"} href={"#Home"}>
                    <img className={"side-logo"} src={"/images/SideLogo.png"} alt={"side logo"} aria-hidden={true}/>
                    RECSolar
                </a>

                <nav className={"desktop"}>
                    <ul>
                        {navLinks.map(({link, name}) => (
                            <li key={name} className={"group"}>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className={"underline"}/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a className={"contact-btn group"} href={"#contact"}>
                    <div className={"inner"}>
                        <span>
                            Contact Us
                        </span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default Navbar;