import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './nav'

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <section className="gridcontainer">
          <header>
            <Nav />
          </header>
          <main>
            <Route exact path="/" component={Home} />
          </main>
          <footer>
            <p>footer</p>
          </footer>
        </section>
      </HashRouter>

    )
  }
}

export default App

