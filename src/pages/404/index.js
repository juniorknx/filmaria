import '../404/style.css';
import Lottie from 'react-lottie';
import errorPage from '../../components/animations/errorPage.json'

export function notFound (){
    return(
        <div className="notfound">
            <Lottie options={{
                animationData:errorPage,
                autoplay:true,
                loop:true,
            }}
            width={1700}
            />
        </div>
    )
}