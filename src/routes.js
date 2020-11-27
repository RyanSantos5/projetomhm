import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Main from './pages/main';
import Category from './pages/category';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/category/:url' component={Category} />
        </Switch>
    </BrowserRouter>
)

export default Routes;