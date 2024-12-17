export default function StartMenu() {
    return (
        <>
            <div style={{backgroundColor: 'blue', padding: '0.5vh'}}>
                <div style={{display: 'flex', margin: '1em', alignItems: 'center'}}>
                    <img style={{height: '5em', border: '2px solid white', borderRadius: '5%'}} src="./src/assets/neko.JPEG"/>
                    <h1 style={{color: 'white', marginLeft: '1em'}}>Alexia</h1>
                </div>
            </div> 
            
            <main style={{display: 'flex', justifyContent: 'space-between', fontSize: '2em', height: '95vh'}}> 
                <div className="white" style={{backgroundColor: 'white', width: '50%'}}>
                    <div>
                        <img/>
                        <p>Python</p>
                    </div>
                    <div>
                        <img/>
                        <p>Java</p>
                    </div>
                    <div>
                        <img/>
                        <p>Internships</p>
                    </div>
                    <div>
                        <img/>
                        <p>Web Design</p>
                    </div>
                    <div>
                        <img/>
                        <p>Machine Learning</p>
                    </div>
                    <div>
                        <img/>
                        <p>Games</p>
                    </div>
                    <div>
                        <img/>
                        <p>Microsoft Word</p>
                    </div>
                    <div> 
                        <p>All Programs</p>
                        <img/>
                    </div>
                </div>

                <div className="blue" style={{backgroundColor: 'lightblue', width: '50%', padding: '1em'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img style={{height: '2em'}} src="./src/assets/my-documents-removebg-preview.png"/>
                        <p>My Documents</p>
                    </div> 
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img style={{height: '2em'}} src="./src/assets/my-recent-documents-removebg-preview.png"/>
                            <p>My Recent Documents</p>
                        </div> 
                        <p style={{fontSize: '15px'}}>&#9654;</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img style={{height: '2em'}} src="./src/assets/my-pictures-removebg-preview.png"/>
                        <p>My Pictures</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img style={{height: '2em'}} src="./src/assets/my-music-removebg-preview.png"/>
                        <p>My Music</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img style={{height: '2em'}} src="https://i.imgur.com/WLQXHbd.png"/>
                        <p>My Computer</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img style={{height: '2em'}} src="./src/assets/control-panel-removebg-preview.png"/>
                        <p>Control Panel</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img style={{height: '2em'}} src="./src/assets/connect-to-removebg-preview.png"/>                            <p>Connect To</p>
                        </div>
                        <p style={{fontSize: '15px'}}>&#9654;</p>
                    </div>
                    <div>
                        <img/>
                        <p>Printers and Faxes</p>
                    </div>
                    <div>
                        <img/>
                        <p>Help and Support</p>
                    </div>
                    <div>
                        <img/>
                        <p>Search</p>
                    </div>
                    <div>
                        <img/>
                        <p>Run...</p>
                    </div>
                </div>
            </main>

            <div style={{backgroundColor: 'blue', padding: '0.5vh'}}>
                <div style={{display: 'flex'}}>
                    <img style={{height: '2.5em'}} src="./src/assets/log-off-removebg-preview.png"/>
                    <p style={{color: 'white', marginLeft: '1em'}}>Log Off</p>
                </div>

                <div style={{display: 'flex'}}>
                    <img style={{height: '5em'}} src="https://64.media.tumblr.com/4e932aabdfe572f340dbe32cfc06f1cb/840b4b6888f1f93f-e3/s540x810/c3d700cbea3465ba7c8215250e988acb638676e8.png"/>
                    <p style={{color: 'white', marginLeft: '1em'}}>Turn Off computer</p>
                </div>
            </div> 
        </>
    )
}