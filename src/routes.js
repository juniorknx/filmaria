import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Contact } from './pages/Contato';
import { Header } from './components/Header';

import {Home} from './pages/Home'
import {Filme} from './pages/Filme'

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contato" component={Contact} />
                    <Route exact path="/filme/:id" component={Filme} />
                </Switch>
        </BrowserRouter>
    )
}

export default Routes