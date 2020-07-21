import React from 'react'
import Sidebar from './Sidebar'
import BigQuote from './BigQuote'
import Characters from "../img/characters.png"
import Quotes from '../img/quotes.png'
import Episodes from '../img/episodes.png'
import BigCircuricalButton from './BigCircuralButton'

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="d-flex flex-column flex-md-row">
            <div className="buttons d-flex flex-column col-12 col-md-8">
                <BigCircuricalButton image={Characters} text="Characters" link={"/characters"} />
                <BigCircuricalButton image={Episodes} text="Episodes" link={"/episodes"} />
                <BigCircuricalButton image={Quotes} text="Quotes" link={"/quotes"} />
            </div>
            <Sidebar />
            </div>
            <BigQuote author="Walter White" content="You asked me if I was in the meth business or the money business. Neither. I am in the empire business" />
        </div>
    )
}
export default Home;