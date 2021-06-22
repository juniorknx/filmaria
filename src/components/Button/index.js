import '../Button/style.css';
import { Link } from 'react-router-dom';

export function ButtonPrimary (props){
    return(
        <Link className="button-primary" to={props.link}>{props.title}</Link>
    );
}