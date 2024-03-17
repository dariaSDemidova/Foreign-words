import './Header.scss'
import '../Cards/Cards'
import '../Vocabulary/Vocabulary'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header>
            <nav>
                <Link to='/'><div className="title">English Dictionary</div></Link>
                <Link to='/'>Vocabulary</Link>
                <Link to='/card'>Card</Link>
                <Link to='/cards'>Cards</Link>
            </nav>
        </header>
    );
}


export default Header;