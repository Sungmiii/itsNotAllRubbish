import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'
import FeedBack from './FeedBack'

class Footer extends React.Component {
    render() {
        return (
            <div className="footercontent">
                <div className="footernav">
                    <Nav />
                </div>
                <div>
                    <FeedBack />
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Footer