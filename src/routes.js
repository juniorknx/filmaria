import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Contact } from './pages/Contato';

import {Home} from './pages/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contato" component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes