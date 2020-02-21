import React from 'react';
import { Switch, Route } from 'react-router-dom'

import MainPage from './MainPage'
import Hospita from './templates/Hospita'
import Students from './templates/Students'
import Contact from './templates/Contact'
import Privacy from './templates/Privacy'
import Cookies from './templates/Cookies'

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path='/hospita' component={Hospita} />
                <Route path='/students' component={Students} />
                <Route path='/contact' component={Contact} />
                <Route path='/privacy' component={Privacy} />
                <Route path='/cookies' component={Cookies} />
            </Switch>
        </main>
    );
}

export default Main;