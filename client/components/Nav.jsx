import React from 'react'
import { Link } from 'react-router-dom'

import rubbish from '../../data/rubbishType'


class Nav extends React.Component {
    render() {
        let itemNav = Object.keys(rubbish)
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {itemNav.map(item => (
                        <li key={item}><Link to={"/environment/" + item}>{item}</Link></li>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default Nav