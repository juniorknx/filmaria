import '../Header/style.css';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from '../Button';

export function Header() {
    return (
        <header>
            <div className="menu-head">
                <div className="menu-logo">
                    <span>.</span>
                    <Link to="/">Filmaria</Link>
                </div>               
                <nav>
                    <ButtonPrimary link="/favoritos" title="Favoritos" />
                </nav>
            </div>
        </header>
    );
}