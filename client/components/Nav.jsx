import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/rubbish">Rubbish</Link></li>
                    <li><Link to="/recycling">Recycling</Link></li>
                    <li><Link to="/glass">Glass</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav