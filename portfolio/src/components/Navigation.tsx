import { AiFillMediumCircle } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiRedbubble } from "react-icons/si";
import { useState, useEffect } from "react"; 

const footer = {
    backgroundColor: "blue", 
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

const icons = {
    backgroundColor: "lightblue",
    width: "10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

const start = {
    backgroundColor: "green",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",  
    borderRadius: '0 50% 50% 0'
}

export function Footer() {
    const [dateState, setDateState] = useState(new Date());

    const t = new Date();
    const c = t.getHours() - 12;
    useEffect(() => {
        setInterval(() => {
        setDateState(new Date());
        }, 1000);
    }, []);
    
    return(
        <footer style={footer}>
            <div style={start}>
                <img style={{height: '20px', width: '20px'}} src="https://seeklogo.com/images/W/windows-xp-icon-logo-E8F84DD6F3-seeklogo.com.png" alt="windows icon"></img>
                <p>Start</p>
            </div>
            <div style={icons}> 
                <a href="https://medium.com/@alexia.csmr" target="_blank" rel="noopener noreferrer"><AiFillMediumCircle /></a>
                <a href="https://github.com/alexiacismaru" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
                <a href="https://www.linkedin.com/in/alexia-cismaru-59a169218/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.redbubble.com/people/alexyuh/shop?asc=u" target="_blank" rel="noopener noreferrer"><SiRedbubble /></a>

                <p>
                    {dateState.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                    })}
                </p> 
            </div> 
        </footer>
    )
}