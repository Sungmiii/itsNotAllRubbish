import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Footer from './Footer'
import RubbishType from './RubbishType'
import RubbishData from './RubbishData'


class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <section className="gridcontainer">
          <header>
          </header>
          <Nav />
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/environment/:type" component={RubbishType} />
            <Route path="/environment/:type/:item" component={RubbishData} />
          </main>
          <footer>
            <Footer />
            <p>&copy; 2018  Cathy James Kelly Sungmi</p>
          </footer>
        </section>
      </HashRouter>

    )
  }
}

export default App

