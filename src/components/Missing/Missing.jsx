import { Link } from 'react-router-dom'
import styles from './Missing.module.css'

function Missing() {
    return (
        <main>
            <h1>404</h1>
            <h2>страница не найдена</h2>
            <div className={styles.missingMessage}>Что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.
            </div>
            <Link to='/'><button className={styles.missingButton}>На главную</button></Link>
            
        </main>
    )}

export default Missing;