import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Blog from './Blog'
import Prepareforthedutchwayofliving from './blogs/Prepareforthedutchwayofliving'
import Scammedbrokeanddesperate from './blogs/Scammedbrokeanddesperate'
import Tipstoliveinthenetherlands from './blogs/Tipstoliveinthenetherlands'
import Youngandoldtogether from './blogs/Youngandoldtogether'
import Knownfromtv from './blogs/Knownfromtv'
import Becomeahost from './blogs/Becomeahost'
import Housingshortage from './blogs/Housingshortage'
import Letsintroduce from './blogs/Letsintroduce'
import withTracker from './tracking';

// The Roster component matches one of two different routes
// depending on the full pathname
const BlogSwitch = () => (
    <Switch>
        <Route exact path='/Blog' component={Blog} />
        <Route path='/Blog/prepareforthedutchwayofliving' component={withTracker(Prepareforthedutchwayofliving)} />
        <Route path='/Blog/scammedbrokeanddesperate' component={withTracker(Scammedbrokeanddesperate)} />
        <Route path='/Blog/Tipstoliveinthenetherlands' component={withTracker(Tipstoliveinthenetherlands)} />
        <Route path='/Blog/youngandoldtogether' component={withTracker(Youngandoldtogether)} />
        <Route path='/Blog/knownfromtv' component={withTracker(Knownfromtv)} />
        <Route path='/Blog/becomeahost' component={withTracker(Becomeahost)} />
        <Route path='/Blog/housingshortage' component={withTracker(Housingshortage)} />
        <Route path='/Blog/letsintroduce' component={withTracker(Letsintroduce)} />
    </Switch>
)


export default BlogSwitch
