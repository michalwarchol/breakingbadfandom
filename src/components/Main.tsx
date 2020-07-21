import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Characters from './Characters'
import Episodes from './Episodes'
import Quotes from './Quotes'
import "../img/fontello-5efaa98a/css/fontello.css"

const Main: React.FC = () => {
    return (
        <div className="main container">
            <Header />
            <Router>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/characters" component={Characters} />
                    <Route exact path="/episodes" component={Episodes} />
                    <Route path="/quotes" component={Quotes} />
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default Main;