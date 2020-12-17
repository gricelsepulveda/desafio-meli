import React from 'react'
import ReactDOM from 'react-dom'
import Layout from "./views/Layout"
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

const App = () => <Router history={history}><Layout/></Router>

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'))