import {
    BrowserRouter,
    Routes, 
    Route
} from 'react-router-dom';
import Header from './components/Header/Header';

import { Error, Home }from './pages';

export default function App()
{
    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/error" element={ <Error /> } />
            </Routes>
        </BrowserRouter>
    );
}
