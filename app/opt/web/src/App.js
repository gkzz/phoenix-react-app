import React from 'react'
import './App.scss'
import {BrowserRouter, Route, Switch, useParams} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/groups/new'>
            <NewGroupPage/>
          </Route>
          <Route path='/groups/:groupId'>
            <GroupDetailPage/>
          </Route>
          <Route path='/'>
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
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
return <h1>{`Group Detail ${groupId}`}</h1>
}

function HomePage() {
  return <h1>My Chat Groups</h1>
}