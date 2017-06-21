import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {Home,Details,Page404} from './index.js'

export default Main = () => {

    return(
      <main>
        <Switch>

          <Route exact path='/' component={Home}/>
          <Route path='/details/:media/:id' component={Details}/>
          <Route component={Page404}/>

        </Switch>
      </main>
    )
  }
