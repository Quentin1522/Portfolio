import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "../src/App.scss";
import process from 'process';

function App() {
    const basename = process.env.NODE_ENV === "production" ? "/Portfolio/" : "/";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;