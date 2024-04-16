import styles from './Header.module.css'
import '../Cards/Cards'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header>
            <nav>
                <Link to='/'><div className={styles.title}>English Dictionary</div></Link>
                <Link to='/'>Vocabulary</Link>
                <Link to='/card'>Card</Link>
                <Link to='/cards'>Cards</Link>
            </nav>
        </header>
    );
}


export default Header;