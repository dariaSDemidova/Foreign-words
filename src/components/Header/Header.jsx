import './Header.scss'
import '../Cards/Cards'
import '../Vocabulary/Vocabulary'

function Header(props) {

    return (
        <header>
            <div className="title">English Dictionary</div>
            <a href="Cards.jsx" className="cards">Cards</a>
            <a href="Vocabulary.jsx" className="vocabulary">Vocabulary</a>
        </header>
    );
}


export default Header;