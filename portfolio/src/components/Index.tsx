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
    height: '5vh', 
}

const icons = {
    backgroundColor: "lightblue",
    width: "10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: '5vh',
}

const start = {
    backgroundColor: "green",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",  
    borderRadius: '0 50% 50% 0', 
    height: '5vh',
    color: 'white',
}

const main = {
    backgroundImage: "url('https://cdn.wallpaperhub.app/cloudcache/6/9/0/e/e/f/690eefe3ba1f553e0ea527f51ee407b604b681b4.jpg')",
    backgroundSize: "cover",
    fontSize: "1rem",
    height: "95vh",
}

const button = {
    backgroundColor: 'transparent',
    border: 'none',
    color: "white",
    textShadow: '0.5px black',
}

const img = {
    height: '2rem', 
} 

export default function Index() { 
    const [dateState, setDateState] = useState(new Date());

    const t = new Date();
    const c = t.getHours() - 12;
    useEffect(() => {
        setInterval(() => {
        setDateState(new Date());
        }, 1000);
    }, []);

    return (
        <>  
            <main style={main}>
                <div style={{ position: 'absolute', bottom: '70%', right: '41%' }}>
                    <button style={button}>
                        <img style={img} src="https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-16-Folder-Documents-icon.png"/>
                        <p>Work</p>
                    </button>
                </div>
                <div style={{ position: 'absolute', bottom: '70%', right: '35%' }}>
                    <button style={button}>
                        <img style={img}  src="https://img.utdstc.com/icon/711/67e/71167eea4aa337e9bb351a6b5f1b8268ad2bd0fb113f327c3dd4577e9ce63378:200"/>
                        <p>soundboard</p>
                    </button>
                </div>
                <div style={{ position: 'absolute', bottom: '70%', right: '91%' }}>
                    <button style={button}>
                        <img style={img}  src="./src/assets/download.png"/>
                        <p>chatbot</p>
                    </button>
                </div>
                <div style={{ position: 'absolute', bottom: '58%', right: '90%' }}>
                    <button style={button}>
                        <img style={img}  src="./src/assets/png-clipart-windows-live-for-xp-music-folder-icon-thumbnail-removebg-preview.png"/>
                        <p>music_library</p>
                    </button>
                </div>
                <div style={{ position: 'absolute', bottom: '70%', right: '28.5%' }}>
                    <button style={button}>
                        <img style={img}  src="./src/assets/windows-xp-games-v0-a8i9k6esrwnc1-removebg-preview.png"/>
                        <p>backgammon</p>
                    </button>
                </div>
                <div style={{ position: 'absolute', bottom: '30%', right: '68%' }}>
                    <button style={button}>
                        <img style={img}  src="./src/assets/download-removebg-preview.png"/>
                        <p>predict_pollution</p>
                    </button>
                </div>
                <div style={{ position: 'absolute', bottom: '30%', right: '61%' }}>
                    <button style={button}>
                        <img style={img}  src="./src/assets/alert_icon.png"/>
                        <p>cost_monitoring</p>
                    </button>
                </div>
                <div style={{ position: 'absolute', bottom: '70%', right: '24%' }}>
                    <button style={button}>
                        <img style={img}  src="./src/assets/windows-xp-games-v0-a8i9k6esrwnc1-removebg-preview.png"/>
                        <p>exago</p>
                    </button>
                </div>
                <div style={{ position: 'absolute', bottom: '47%', right: '18%' }}>
                    <button style={button}>
                        <img style={img}  src="./src/assets/windows-xp-games-v0-a8i9k6esrwnc1-removebg-preview.png"/>
                        <p>one_armed_bandit</p>
                    </button>
                </div>
                <div style={{ position: 'absolute', bottom: '45%', right: '76%' }}>
                    <button style={button}>
                        <img style={img}  src="./src/assets/windows-xp-games-v0-a8i9k6esrwnc1-removebg-preview.png"/>
                        <p>plantify</p>
                    </button>
                </div>
                <div style={{ position: 'absolute', bottom: '82%', right: '27%' }}>
                    <button style={button}>
                        <img style={img}  src="./src/assets/windows-xp-games-v0-a8i9k6esrwnc1-removebg-preview.png"/> 
                        <p>reinforcement_learning</p>
                    </button>
                </div> 
                <div style={{ position: 'absolute', bottom: '35%', right: '19%' }}>
                    <button style={button}>
                        <img style={img}  src="./src/assets/images-removebg-preview.png"/>
                        <p>youth_council</p>
                    </button>
                </div>
                <div style={{ position: 'absolute', bottom: '30%', right: '76%' }}>
                    <button style={button}>
                        <img style={img}  src="./src/assets/worddoc-removebg-preview.png"/>
                        <p>License</p>
                    </button>
                </div>
                <div style={{ position: 'absolute', bottom: '47%', right: '13%' }}>
                    <button style={button}>
                        <img style={img}  src="./src/assets/worddoc-removebg-preview.png"/>
                        <p>About</p>
                    </button>
                </div>
            </main> 

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
        </>
    );
}