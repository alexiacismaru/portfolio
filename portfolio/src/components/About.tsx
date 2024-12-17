// import { Dialog } from '@mui/material'; 

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

const mocknav = {
    display: 'flex', 
    justifyContent: 'space-between', 
    marginLeft: '1rem', 
    backgroundColor: '#e3dac9',
}

const img = {
    height: '1rem',
}

interface AboutProps {
    isOpen: boolean; 
    onClose: () => void; 
}

export default function About({isOpen, onClose}: AboutProps) {
    return (
        <> 
            {/* <Dialog style={main} open={isOpen} onClose={onClose}> */}
            <main style={main}> 
                <div className="navigation-menu" style={navigationMenu}>
                    <div style={{display:'flex', alignItems: 'center'}}>
                        <img src="https://i.imgur.com/RjMRqmK.png" alt='folder icon' style={{width: '25px', height: '25px'}}></img>
                        <p style={{color: 'white'}}>C:\About</p>
                    </div>
                    <div>
                        <button style={navButton}>_</button>
                        <button style={navButton}>O</button>
                        <button style={closeButton} onClick={onClose}>X</button>
                    </div> 
                </div>

                <div style={{backgroundColor: '#e3dac9'}}> 
                    <div style={mocknav}>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '20%', fontSize: '1.5rem'}}>
                            <p>File</p>
                            <p>Edit</p>
                            <p>View</p>
                            <p>Insert</p>
                            <p>Format</p>
                            <p>Tools</p>
                            <p>Table</p>
                            <p>Help</p>
                        </div> 
                        <button>X</button> 
                    </div>
                </div>
                <div style={{backgroundColor: '#e3dac9'}}> 
                    <div style={mocknav}>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '20%'}}>
                            <img style={img} src="http://i.imgur.com/6RErgJC.png"/>
                            <img style={img} src="./src/assets/sticker-png-windows-xp-folders-pack-256-folder-opened-256-icon-thumbnail-removebg-preview.png"/>
                            <img style={img} src="./src/assets/floppy-disk-removebg-preview.png"/> 
                            <img style={img} src="./src/assets/email-icon.drawio.png"/> 
                        </div> 
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <img style={img} src="./src/assets/email-icon.drawio.png"/>
                            <img style={img} src="./src/assets/email-icon.drawio.png"/>
                            <img style={img} src="./src/assets/email-icon.drawio.png"/>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <img style={img} src="./src/assets/email-icon.drawio.png"/>
                            <img style={img} src="./src/assets/email-icon.drawio.png"/>
                            <img style={img} src="./src/assets/email-icon.drawio.png"/>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <img style={img} src="./src/assets/email-icon.drawio.png"/>
                            <img style={img} src="./src/assets/email-icon.drawio.png"/> 
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <img style={img} src="./src/assets/email-icon.drawio.png"/>
                            <img style={img} src="./src/assets/email-icon.drawio.png"/> 
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <select name="zoom" id="zoom" style={{width: '100%'}}>
                                <option value="100%">100%</option>
                                <option value="75%">75%</option>
                                <option value="50%">50%</option>
                                <option value="25%">25%</option>
                            </select>
                            <img style={img} src="./src/assets/email-icon.drawio.png"/>
                        </div>
                        <button>X</button> 
                    </div>
                </div> 
                <div style={{backgroundColor: '#e3dac9'}}> 
                    <div style={mocknav}>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '20%'}}>
                            <select name="font" id="font">
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Arial">Arial</option>
                                <option value="Calibri">Calibri</option>
                                <option value="Comic Sans">Comic Sans</option>
                            </select>

                            <select name="fontSize" id="fontSize">
                                <option value="12">12</option>
                                <option value="14">14</option>
                                <option value="16">16</option>
                                <option value="18">18</option>
                                <option value="20">20</option>
                            </select>
                        </div> 
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <p>B</p>    
                            <p>I</p>
                            <p>U</p>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button> 
                        </div>
                        <button>X</button> 
                    </div>
                </div>

                <section>
                    <h1>About me</h1>
                    <p>Hi, I'm Alexia. I'm a software engineer and I like to make things.</p>
                </section>
                <div style={{backgroundColor: '#e3dac9'}}> 
                    <div style={mocknav}>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '20%'}}>
                            <select name="font" id="font">
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Arial">Arial</option>
                                <option value="Calibri">Calibri</option>
                                <option value="Comic Sans">Comic Sans</option>
                            </select>

                            <select name="fontSize" id="fontSize">
                                <option value="12">12</option>
                                <option value="14">14</option>
                                <option value="16">16</option>
                                <option value="18">18</option>
                                <option value="20">20</option>
                            </select>
                        </div> 
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <p>B</p>    
                            <p>I</p>
                            <p>U</p>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button> 
                        </div>
                        <button>X</button> 
                    </div>
                </div>
                <div style={{backgroundColor: '#e3dac9'}}> 
                    <div style={mocknav}>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '20%'}}>
                            <select name="font" id="font">
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Arial">Arial</option>
                                <option value="Calibri">Calibri</option>
                                <option value="Comic Sans">Comic Sans</option>
                            </select>

                            <select name="fontSize" id="fontSize">
                                <option value="12">12</option>
                                <option value="14">14</option>
                                <option value="16">16</option>
                                <option value="18">18</option>
                                <option value="20">20</option>
                            </select>
                        </div> 
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <p>B</p>    
                            <p>I</p>
                            <p>U</p>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'space-around', width: '10%'}}>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img style={img} src="./src/assets/email-icon.drawio.png"/></button> 
                        </div>
                    </div>
                </div>
            </main>
            {/* </Dialog>  */}
        </>
    )
}