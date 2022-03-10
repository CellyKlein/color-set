import {
    BrowserRouter,
    Routes, 
    Route
} from 'react-router-dom';
import Header from './components/Header/Header';

import { NotFound, Home, Login }from './pages';

export default function App()
{
    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    );
}
