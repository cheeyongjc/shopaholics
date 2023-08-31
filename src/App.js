import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, Navigation } from './components';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route exact path='/' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
