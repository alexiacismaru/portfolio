import '../css/StartMenu.css';

export default function StartMenu() {
    return (
        <>
            <div id='top'>
                <div>
                    <img src="./src/assets/neko.JPEG"/>
                    <h1>Alexia</h1>
                </div>
                
            </div>  
            <div id='orangeborder'></div>
            <main id='main'> 
                <div id='white'>
                    <div>
                        <img src="./src/assets/python-removebg-preview.png"/>
                        <p>Python</p>
                    </div>
                    <div>
                        <img src="./src/assets/java-removebg-preview.png"/>
                        <p>Java</p>
                    </div>

                    <div id='blackborder' style={{height: '2px'}}></div>

                    <div>
                        <img src="./src/assets/briefcase-removebg-preview.png"/>
                        <p>Internships</p>
                    </div>
                    <div>
                        <img src="./src/assets/internet-explorer-removebg-preview.png"/>
                        <p>Web Design</p>
                    </div>
                    <div>
                        <img src="./src/assets/floppy-disk-desktop-removebg-preview.png"/>
                        <p>Machine Learning</p>
                    </div>
                    <div>
                        <img src="./src/assets/games-removebg-preview.png"/>
                        <p>Games</p>
                    </div>
                    <div>
                        <img src="./src/assets/word-removebg-preview.png"/>
                        <p>Microsoft Word</p>
                    </div>

                    <div id='blackborder' style={{height: '2px'}}></div>

                    <div> 
                        <p>All Programs</p>
                        <img src="./src/assets/all-programs-removebg-preview.png"/>
                    </div>
                </div>

                <div id="blue">
                    <div>
                        <img src="./src/assets/my-documents-removebg-preview.png"/>
                        <p>My Documents</p>
                    </div> 
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img style={{height: '1.5em'}} src="./src/assets/my-recent-documents-removebg-preview.png"/>
                            <p>My Recent Documents</p>
                        </div> 
                        <p style={{fontSize: '15px'}}>&#9654;</p>
                    </div>
                    <div>
                        <img src="./src/assets/my-pictures-removebg-preview.png"/>
                        <p>My Pictures</p>
                    </div>
                    <div>
                        <img src="./src/assets/my-music-removebg-preview.png"/>
                        <p>My Music</p>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/WLQXHbd.png"/>
                        <p>My Computer</p>
                    </div>

                    <div id='blackborder' style={{height: '2px'}}></div>

                    <div>
                        <img src="./src/assets/control-panel-removebg-preview.png"/>
                        <p>Control Panel</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img style={{height: '1.5em'}} src="./src/assets/connect-to-removebg-preview.png"/>                            
                            <p>Connect To</p>
                        </div>
                        <p style={{fontSize: '15px'}}>&#9654;</p>
                    </div>
                    <div>
                        <img src="./src/assets/printers-and-faxes-removebg-preview.png"/>
                        <p>Printers and Faxes</p>
                    </div>

                    <div id='blackborder' style={{height: '2px'}}></div>

                    <div>
                        <img src="./src/assets/download.png"/>
                        <p>Help and Support</p>
                    </div>
                    <div>
                        <img src="./src/assets/search-removebg-preview.png"/>
                        <p>Search</p>
                    </div>
                    <div>
                        <img src="./src/assets/run-removebg-preview.png"/>
                        <p>Run...</p>
                    </div>
                </div>
            </main>

            <div id='bottom'>
                <div>
                    <img style={{height: '2.5em'}} src="./src/assets/log-off-removebg-preview.png"/>
                    <h3>Log Off</h3>
                </div>

                <div>
                    <img style={{height: '5em'}} src="https://64.media.tumblr.com/4e932aabdfe572f340dbe32cfc06f1cb/840b4b6888f1f93f-e3/s540x810/c3d700cbea3465ba7c8215250e988acb638676e8.png"/>
                    <h3>Turn Off computer</h3>
                </div>
            </div> 
        </>
    )
}