import { Link } from 'react-router-dom';

export default function Header()
{
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/error">Error Page</Link>
        </nav>
    );
}
