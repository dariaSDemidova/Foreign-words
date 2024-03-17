import { Link } from 'react-router-dom'

function Missing() {
    return (
        <main>
            <h1>404</h1>
            <h2>страница не найдена</h2>
            <div className="missing-message">Что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введен невверный адрес в адресной строке.
            </div>
            <Link to='/'><button className="missing-btn">На главную</button></Link>
            
        </main>
    )}

export default Missing;