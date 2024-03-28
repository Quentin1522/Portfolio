import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "../src/App.scss";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/Portfolio/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;