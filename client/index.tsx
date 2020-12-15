import React from 'react'
import ReactDOM from 'react-dom'
import Layout from "./views/Layout"

const App = () => <Layout viewport="mobile"/>

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'))