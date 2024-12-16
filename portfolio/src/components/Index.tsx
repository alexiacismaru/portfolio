import { Footer } from "./Navigation"; 

const main = {
    backgroundImage: "url('https://cdn.wallpaperhub.app/cloudcache/6/9/0/e/e/f/690eefe3ba1f553e0ea527f51ee407b604b681b4.jpg')",
    backgroundSize: "cover",
    color: "white",
}

export default function Index() { 
    return (
        <>  
            <main style={main}>
                <div>
                    <img src="https://icons.iconarchive.com/icons/dtafalonso/modern-xp/512/ModernXP-16-Folder-Documents-icon.png"></img>
                    <p>Portofio</p>
                </div>
                <div>
                    <img src="https://img.utdstc.com/icon/711/67e/71167eea4aa337e9bb351a6b5f1b8268ad2bd0fb113f327c3dd4577e9ce63378:200"></img>
                    <p>Music Library</p>
                </div>
                <div>
                    <img src="./src/assets/download.png"></img>
                    <p>Chatbot</p>
                </div>
                <Footer/> 
            </main>
            
        </>
    );
}