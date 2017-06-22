import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {Page404} from '../components'
import Home from './Home'
import Details from './Details'

export default () => {

  return(
    <main>
      <Switch>

        <Route exact path='/' component={Home}/>
        <Route path='/details/:source/:id' component={Details}/>
        <Route component={Page404}/>

      </Switch>
    </main>
  )
}
