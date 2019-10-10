import React from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import Top from './views/Top'
import Login from './views/Login'
import Divide from './views/Divide'
import Events from './views/Events'
import Result from './views/Result'
import Held from './views/Held'
import PlayerHome from './views/PlayerHome'
import NotHold from './views/NotHold'
import PlayerApply from './views/PlayerApply'
import Join from './views/Join'
import PlayerResult from './views/PlayerResult'
import PlayerDelete from './views/PlayerDelete'
import AdminHome from './views/AdminHome'
import AdminApply from './views/AdminApply'
import AdminChange from './views/AdminChange'

export default () => {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Top} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/divide' component={Divide} />
      <Route exact path='/events/:eid' component={Events} />
      <Route exact path='/events/:eid/matchs/:mid' component={Result} />
      <Route exact path='/held' component={Held} />
      <Route exact path='/pleyer/:pid' component={PlayerHome} />
      <Route exact path='/nothold' component={NotHold} />
      <Route exact path='/player/:pid/apply' component={PlayerApply} />
      <Route exact path='/player/:pid/join' component={Join} />
      <Route exact path='/events/:eid/matchs/:mid/users/:uid' component={PlayerResult} />
      <Route exact path='/player/:pid/delete' component={PlayerDelete} />
      <Route exact path='/admin/:aid' component={AdminHome} />
      <Route exact path='/admin/:aid/input' component={AdminApply} />
      <Route exact path='/admin/:aid/change' component={AdminChange} />
    </Router>
  )
}
