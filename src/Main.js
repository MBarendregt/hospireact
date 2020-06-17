import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import MainPage from './MainPage'
import Hospita from './templates/Hospita'
import Students from './templates/Students'
import Contact from './templates/Contact'
import Privacy from './templates/Privacy'
import Cookies from './templates/Cookies'
import BlogSwitch from './templates/BlogSwitch'
import withTracker from './templates/tracking';

function Main() {
    return (
        <main>


            <Switch>
                <Route exact path='/' component={withTracker(MainPage)} />
                <Route path='/hospita' component={withTracker(Hospita)} />
                <Route path='/students' component={withTracker(Students)} />
                <Route path='/contact' component={withTracker(Contact)} />
                <Route path='/privacy' component={withTracker(Privacy)} />
                <Route path='/cookies' component={withTracker(Cookies)} />
                <Route path='/blog' component={BlogSwitch} />
                <Route render={() => <Redirect to={{ pathname: "/" }} />} />
            </Switch>
        </main>
    );
}

export default Main;