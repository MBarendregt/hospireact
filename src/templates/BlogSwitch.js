import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Blog from './Blog'
import Blogtemplate from './blogs/Blogtemplate'
import Prepareforthedutchwayofliving from './blogs/Prepareforthedutchwayofliving'
import Scammedbrokeanddesperate from './blogs/Scammedbrokeanddesperate'
import Tipstoliveinthenetherlands from './blogs/Tipstoliveinthenetherlands'
import Youngandoldtogether from './blogs/Youngandoldtogether'
import Knownfromtv from './blogs/Knownfromtv'
import Becomeahost from './blogs/Becomeahost'
import Housingshortage from './blogs/Housingshortage'
import Letsintroduce from './blogs/Letsintroduce'

// The Roster component matches one of two different routes
// depending on the full pathname
const BlogSwitch = () => (
    <Switch>
        <Route exact path='/Blog' component={Blog} />
        <Route path='/Blog/prepareforthedutchwayofliving' component={Prepareforthedutchwayofliving} />
        <Route path='/Blog/scammedbrokeanddesperate' component={Scammedbrokeanddesperate} />
        <Route path='/Blog/Tipstoliveinthenetherlands' component={Tipstoliveinthenetherlands} />
        <Route path='/Blog/youngandoldtogether' component={Youngandoldtogether} />
        <Route path='/Blog/knownfromtv' component={Knownfromtv} />
        <Route path='/Blog/becomeahost' component={Becomeahost} />
        <Route path='/Blog/housingshortage' component={Housingshortage} />
        <Route path='/Blog/letsintroduce' component={Letsintroduce} />
    </Switch>
)


export default BlogSwitch
