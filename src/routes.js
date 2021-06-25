import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Contact } from './pages/Contato';
import { Header } from './components/Header';

import {Home} from './pages/Home'
import {Filme} from './pages/Filme'
import {Favorites} from './pages/Favoritos'
import { notFound } from './pages/404';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Favoritos" component={Favorites} />
                    <Route exact path="/filme/:id" component={Filme} />
                    <Route path="*" component={notFound} />
                </Switch>
        </BrowserRouter>
    )
}

export default Routes