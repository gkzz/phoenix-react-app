import React from 'react';
import './App.scss'
import {Route, Router, Switch, useParams} from "react-router-dom"
import {createBrowserHistory} from 'history'
import HomePage from './Component/HomePage/HomePage'
import GroupRepo from './Repo/GroupRepo'
import RedirectService from './Service/RedirectService'

function App() {
  const browserHistory = createBrowserHistory()
  const redirectService = new RedirectService(browserHistory)
  return (
    <Router history={browserHistory}>
      <div className='App'>
        <Header/>
        <Switch>
          <Route path='/groups/new'>
            <NewGroupPage/>
          </Route>
          <Route path='/groups/:groupId'>
            <GroupDetailPage/>
          </Route>
          <Route path='/'>
            <HomePage groupRepo={new GroupRepo()} redirectService={redirectService}/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;

function Header() {
  return (
    <div className="Header">
      <div className="name">Thanks</div>
    </div>
  )
}


function NewGroupPage() {
  return <h1>New Group</h1>
}


function GroupDetailPage() {
  const {groupId} = useParams()
  return <h1>{`Group Detail ${groupId}`}</h1>
}