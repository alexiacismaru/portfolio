// import { Dialog } from '@mui/material'; 
import '../css/About.css';  

interface AboutProps {
    isOpen: boolean; 
    onClose: () => void; 
}

export default function About({isOpen, onClose}: AboutProps) {
    return (
        <> 
            {/* <Dialog id='main' open={isOpen} onClose={onClose}> */}
            <main id='main-about'> 
                <div id='nav'>
                    <div id='about'>
                        <img src="https://i.imgur.com/RjMRqmK.png" alt='folder icon'></img>
                        <p>C:\About</p>
                    </div>
                    <div>
                        <button>_</button>
                        <button>O</button>
                        <button style={{backgroundColor: 'red'}} onClick={onClose}>X</button>
                    </div> 
                </div>

                <div id='mocknav'>
                    <div style={{fontSize: '1.5rem'}}>
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

                <div> 
                    <div id='mocknav'>
                        <div>
                            <img id='img' src="http://i.imgur.com/6RErgJC.png"/>
                            <img id='img' src="./src/assets/sticker-png-windows-xp-folders-pack-256-folder-opened-256-icon-thumbnail-removebg-preview.png"/>
                            <img id='img' src="./src/assets/floppy-disk-removebg-preview.png"/> 
                            <img id='img' src="./src/assets/email-icon.drawio.png"/> 
                        </div> 
                        <div>
                            <img id='img' src="./src/assets/email-icon.drawio.png"/>
                            <img id='img' src="./src/assets/email-icon.drawio.png"/>
                            <img id='img' src="./src/assets/email-icon.drawio.png"/>
                        </div>
                        <div>
                            <img id='img' src="./src/assets/email-icon.drawio.png"/>
                            <img id='img' src="./src/assets/email-icon.drawio.png"/>
                            <img id='img' src="./src/assets/email-icon.drawio.png"/>
                        </div>
                        <div>
                            <img id='img' src="./src/assets/email-icon.drawio.png"/>
                            <img id='img' src="./src/assets/email-icon.drawio.png"/> 
                        </div>
                        <div>
                            <img id='img' src="./src/assets/email-icon.drawio.png"/>
                            <img id='img' src="./src/assets/email-icon.drawio.png"/> 
                        </div>
                        <div>
                            <select name="zoom" id="zoom" style={{width: '100%'}}>
                                <option value="100%">100%</option>
                                <option value="75%">75%</option>
                                <option value="50%">50%</option>
                                <option value="25%">25%</option>
                            </select>
                            <img id='img' src="./src/assets/email-icon.drawio.png"/>
                        </div>
                        <button>X</button> 
                    </div>
                </div> 
                <div style={{backgroundColor: '#e3dac9'}}> 
                    <div id='mocknav'>
                        <div style={{}}>
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
                        <div>
                            <p>B</p>    
                            <p>I</p>
                            <p>U</p>
                        </div>
                        <div>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                        </div>
                        <div>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                        </div>

                        <div>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button> 
                        </div>
                        <button>X</button> 
                    </div>
                </div>

                <section>
                    <h1>About me</h1>
                    <p>Hi, I'm Alexia. I'm a software engineer and I like to make things.</p>
                </section>
                <div style={{backgroundColor: '#e3dac9'}}> 
                    <div id='mocknav'>
                        <div style={{}}>
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
                        <div>
                            <p>B</p>    
                            <p>I</p>
                            <p>U</p>
                        </div>
                        <div>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                        </div>
                        <div>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                        </div>

                        <div>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button> 
                        </div>
                        <button>X</button> 
                    </div>
                </div>
                <div style={{backgroundColor: '#e3dac9'}}> 
                    <div id='mocknav'>
                        <div style={{}}>
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
                        <div>
                            <p>B</p>    
                            <p>I</p>
                            <p>U</p>
                        </div>
                        <div>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                        </div>
                        <div>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                        </div>

                        <div>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button>
                            <button><img id='img' src="./src/assets/email-icon.drawio.png"/></button> 
                        </div>
                    </div>
                </div>
            </main>
            {/* </Dialog>  */}
        </>
    )
}