import { AiFillMediumCircle } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiRedbubble } from "react-icons/si";
import '../styling/Navigation.css';

export function Header() { 
    return (
        // <nav>
        //     <h3><a href="/">Alexia Csmr</a></h3>
        //     <ul style={{display: 'flex', textDecoration: 'none', paddingLeft: '1rem'}}> 
        //         <li><a href="/about">About</a></li>
        //         <li><a href="/work">Work</a></li>   
        //     </ul>
        // </nav>

        <div className="navbar">
            <div className="navbar-item">Alexia Csmr</div>
            <div className="navbar-item">About</div>
            <div className="navbar-item">Work</div> 
        </div>
    )
}

export function Footer() {
    return(
        <footer>
            <div> 
                <a href="https://medium.com/@alexia.csmr" target="_blank" rel="noopener noreferrer"><AiFillMediumCircle /></a>
                <a href="https://github.com/alexiacismaru" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
                <a href="https://www.linkedin.com/in/alexia-cismaru-59a169218/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.redbubble.com/people/alexyuh/shop?asc=u" target="_blank" rel="noopener noreferrer"><SiRedbubble /></a>
            </div> 

            <p>© 2024 Alexia Cismaru</p> 
        </footer>
    )
}