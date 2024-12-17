const main = {
    border: '4px solid blue', 
    borderRadius: '7px'
}

const navigationMenu = {
    backgroundColor: 'blue', 
    display: 'flex', 
    justifyContent: 'space-between'
}

const navButton = {
    border: '1px solid white', 
    backgroundColor: 'blue', 
    width: '15px',
    color: 'white', 
    margin: '0.1rem'
}

const closeButton = {
    border: '1px solid white', 
    backgroundColor: 'red', 
    width: '15px',
    color: 'white', 
    margin: '0.1rem'
}

const work = {
    display: 'flex', 
    alignItems: 'center', 
}

const img = {
    width: '5rem',
    height: '5rem'
}

const a = {
    color: 'black',
}

const mocknav = {
    display: 'flex', 
    justifyContent: 'space-between', 
    marginLeft: '1rem', 
    backgroundColor: '#e3dac9',
}

export default function Work() {
    return (
        <> 
            <main style={main}> 
                <div className="navigation-menu" style={navigationMenu}>
                    <div style={{display:'flex', alignItems: 'center'}}>
                        <img src="https://i.imgur.com/RjMRqmK.png" alt='folder icon' style={{width: '25px', height: '25px'}}></img>
                        <p style={{color: 'white'}}>C:\Work</p>
                    </div>
                    <div>
                        <button style={navButton}>_</button>
                        <button style={navButton}>O</button>
                        <button style={closeButton}>X</button>
                    </div> 
                </div>

                <div style={{backgroundColor: '#e3dac9'}}> 
                    <div style={mocknav}>
                        <div style={{display: 'flex', justifyContent: 'space-around', fontSize: '1.5rem'}}>
                            <p>File</p>
                            <p>Edit</p>
                            <p>View</p>
                            <p>Insert</p>
                            <p>Format</p>
                            <p>Tools</p>
                            <p>Table</p>
                            <p>Help</p>
                        </div> 
                        <div style={{ backgroundColor: 'white', width: '3rem', height: '1rem', padding: '1vh' }}>
                         <img style={{ width: '1rem', height: '1rem' }} src="https://seeklogo.com/images/W/windows-xp-icon-logo-E8F84DD6F3-seeklogo.com.png" alt="windows icon"></img>
                        </div>
                    </div>
                </div>

                <section className="sidebar">
                    <div>
                        <p>Folders</p>
                        <button>x</button>
                    </div>
                    <div>
                        <img src=""/>
                        <p>Desktop</p>
                    </div>
                </section>

                <section className="folders">
                    <div className="cost-monitoring" style={work}>
                        <img src="https://i.imgur.com/WLQXHbd.png" alt="icon" style={img}></img>
                        <a href="/cost-monitoring" style={a}>Cloud and Cost Monitoring</a>
                    </div>
                    <div className="chatbot" style={work}>
                        <img src="https://i.imgur.com/WLQXHbd.png" alt="icon" style={img}></img>
                        <a href="/chatbot" style={a}>Data Science Chatbot</a> 
                    </div>
                    <div className="exago" style={work}>
                        <img src="https://i.imgur.com/WLQXHbd.png" alt="icon" style={img}></img>
                        <a href="/exago" style={a}>Exago</a> 
                    </div>
                    <div className="music-library" style={work}>
                        <img src="https://i.imgur.com/WLQXHbd.png" alt="icon" style={img}></img>
                        <a href="/music-library" style={a}>Music Library</a>
                    </div>
                    <div className="plantify" style={work}>
                        <img src="https://i.imgur.com/WLQXHbd.png" alt="icon" style={img}></img>
                        <a href="/plantify" style={a}>Plantify</a> 
                    </div>
                    <div className="predict-pollution" style={work}>
                        <img src="https://i.imgur.com/WLQXHbd.png" alt="icon" style={img}></img>
                        <a href="/predict-pollution" style={a}>Predicting Pollution</a> 
                    </div>
                    <div className="backgammon" style={work}>
                        <img src="https://i.imgur.com/WLQXHbd.png" alt="icon" style={img}></img>
                        <a href="/backgammon" style={a}>Backgammon</a> 
                    </div>
                    <div className="youth-council" style={work}>
                        <img src="https://i.imgur.com/WLQXHbd.png" alt="icon" style={img}></img>
                        <a href="/youth-council" style={a}>Youth Council</a> 
                    </div>
                    <div className="reinforcement-learning" style={work}>
                        <img src="https://i.imgur.com/WLQXHbd.png" alt="icon" style={img}></img>
                        <a href="/reinforcement-learning" style={a}>Reinforcement Learning</a> 
                    </div>
                    <div className="soundboard" style={work}>
                        <img src="https://i.imgur.com/WLQXHbd.png" alt="icon" style={img}></img>
                        <a href="/soundboard" style={a}>Soundboard</a> 
                    </div> 
                    <div className="onearmedbandit" style={work}>
                        <img src="https://i.imgur.com/WLQXHbd.png" alt="icon" style={img}></img>
                        <a href="/one-armed-bandit" style={a}>One Armed Bandit</a>
                    </div>
                </section>
            </main> 
        </>
    )
}