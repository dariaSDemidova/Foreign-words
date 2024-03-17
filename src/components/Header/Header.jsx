import './Header.scss'
import '../Cards/Cards'
import '../Vocabulary/Vocabulary'

function Header() {

    return (
        <header>
            <nav>
                <div className="title">English Dictionary</div>
                <a href="Vocabulary.jsx" className="vocabulary">Vocabulary</a>
                <a href="Cards.jsx" className="cards">Cards</a>
            </nav>
        </header>
    );
}


export default Header;