import React from 'react';
import { Switch, Route } from 'react-router-dom'

import MainPage from './MainPage'
import Hospita from './templates/Hospita'
import Students from './templates/Students'

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path='/hospita' component={Hospita} />
                <Route path='/students' component={Students} />
            </Switch>
        </main>
    );
}

export default Main;