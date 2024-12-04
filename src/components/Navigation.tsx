import { AiFillMediumCircle } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiRedbubble } from "react-icons/si";

export function Header() {
    return (
        <nav>
            <h3><a href="/">Alecsiuh</a></h3>
            <ul> 
                <li><a href="/about">About</a></li> 
                <li><a href="/work">Work</a></li>
            </ul>
        </nav>
    )
}

export function Footer() {
    return(
        <footer>
            <div>
                <AiFillMediumCircle />
                <SiGithub />
                <FaLinkedin />
                <SiRedbubble />
            </div>
            <p>© 2024 Alexia Cismaru</p>
        </footer>
    )
}