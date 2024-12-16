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
    width: '20%', 
    marginLeft: '1rem', 
    backgroundColor: 'lightgray',
}

export default function Chatbot() {
    return (
        <>  
                    <main style={main}>
            <div className="navigation-menu" style={navigationMenu}>
                    <div style={{display:'flex', alignItems: 'center'}}>
                        <img src="https://i.imgur.com/RjMRqmK.png" alt='folder icon' style={{width: '25px', height: '25px'}}></img>
                        <p style={{color: 'white'}}>C:\Work\chatbot</p>
                    </div>
                    <div>
                        <button style={navButton}>_</button>
                        <button style={navButton}>O</button>
                        <button style={closeButton}>X</button>
                    </div> 
                </div>

                <div style={{backgroundColor: 'lightgray'}}> 
                    <div className="mocknav" style={mocknav}>
                        <p>File</p>
                        <p>Edit</p>
                        <p>View</p>
                        <p>Favorites</p>
                        <p>Tools</p>
                        <p>Help</p>
                    </div>
                </div>
                <h1>Chatbot</h1>
            </main> 
        </>
    )
}