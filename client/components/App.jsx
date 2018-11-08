import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <React.Fragment>

          <section className="gridcontainer">
            <header>
              <h1>isNotAllRubbish!</h1>
            </header>
            <Nav />
            <main>
              <Home />
            </main>
            <footer>
              <p>This is footer for isNotAllRubbish 2018</p>
            </footer>
          </section>
        </React.Fragment>
      </HashRouter>
    )
  }
}
export default App

