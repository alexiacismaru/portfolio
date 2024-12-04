import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import About from "./components/About.tsx";
import CostMonitoring from "./components/CostMonitoring.tsx";
import Exago from "./components/Exago.tsx";
import Index from './components/Index.tsx'; 
import MusicLibrary from './components/MusicLibrary.tsx';
import Plantify from './components/Plantify.tsx';
import PredictPollution from './components/PredictPollution.tsx';
import Backgammon from './components/Backgammon.tsx';
import YouthCouncil from './components/YouthCouncil.tsx';
import ReinforcementLearning from './components/ReinforcementLearning.tsx';
import Soundboard from './components/Soundboard.tsx';
import Work from './components/Work.tsx';
import Chatbot from './components/Chatbot.tsx';
import OneArmedBandit from './components/OneArmedBandit.tsx';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/" element={<Index />} />
                    <Route path="/exago" element={<Exago />} />
                    <Route path="/cost-monitoring" element={<CostMonitoring />} />
                    <Route path="/music-library" element={<MusicLibrary />} /> 
                    <Route path="/plantify" element={<Plantify />} />
                    <Route path="/predict-pollution" element={<PredictPollution />} />
                    <Route path="/backgammon" element={<Backgammon />} />
                    <Route path="/youth-council" element={<YouthCouncil />} />
                    <Route path="/reinforcement-learning" element={<ReinforcementLearning />} />
                    <Route path="/soundboard" element={<Soundboard />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/chatbot" element={<Chatbot />} />
                    <Route path="/one-armed-bandit" element={<OneArmedBandit />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;