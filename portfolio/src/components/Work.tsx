import { Footer, Header } from "./Navigation";

export default function Work() {
    return (
        <>
            <Header/>
            <main> 
                <div className="cost-monitoring">
                    <h2><a href="/cost-monitoring">Cloud and Cost Monitoring</a></h2>
                    <img></img>
                    <p>Cloud monitoring and cost management using machine learning</p> 
                </div>
                <div className="chatbot">
                    <h2><a href="/chatbot">Data Science Chatbot</a></h2>
                    <img></img>
                    <p>A data-analyst chatbot using GPT-3.5 and LangChain, bridging the gap between data science and end-users.</p>
                </div>
                <div className="exago">
                    <h2><a href="/exago">Exago</a></h2>
                    <img></img>
                    <p>An interactive EXAGO board that uses game strategies to play against the user.</p>
                </div>
                <div className="music-library">
                    <h2><a href="/music-library">Music Library</a></h2>
                    <img></img>
                    <p>A platform where users can manage their music collection by adding, deleting, or updating their artists, songs, or albums.</p>
                </div>
                <div className="plantify">
                    <h2><a href="/plantify">Plantify</a></h2>
                    <img></img>
                    <p>A 3D-printed water pot that calculates the plant's water needs based on environmental factors.</p>
                </div>
                <div className="predict-pollution">
                    <h2><a href="/predict-pollution">Predicting Pollution</a></h2>
                    <img></img>
                    <p>A platform where Belgian residents can check their area's pollution and traffic levels.</p>
                </div>
                <div className="backgammon">
                    <h2><a href="/backgammon">Backgammon</a></h2>
                    <img></img>
                    <p>An ASCII backgammon game that plays against the user on the console.</p>
                </div>
                <div className="youth-council">
                    <h2><a href="/youth-council">Youth Council</a></h2>
                    <img></img>
                    <p>A platform for children to express their opinions on their municipality.</p>
                </div>
                <div className="reinforcement-learning">
                    <h2><a href="/reinforcement-learning">Reinforcement Learning</a></h2>
                    <img></img>
                    <p>Experimented with reinforcement learning algorithms in the Frozen Lake and Cartpole projects.</p>
                </div>
                <div className="soundboard">
                    <h2><a href="/soundboard">Soundboard</a></h2>
                    <img></img>
                    <p>A website that allows users to play, stop, add, or delete sounds to create a customizable soundboard. </p>
                </div> 
                <div>
                    <h2><a href="/one-armed-bandit">One Armed Bandit</a></h2>
                    <img></img>
                    <p>A slot machine game on an Arduino microcontroller with LED indicators and sound effects to mimic the one-armed bandit game.</p>
                </div>
            </main>
            <Footer/>
        </>
    )
}