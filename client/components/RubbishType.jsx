import React from 'react'
import { Link } from 'react-router-dom'

import type from '../../data/rubbishType'


class RubbishType extends React.Component {
    render() {
        let selectedType = this.props.match.params.type
        let selectedTypeArray = type[selectedType]
        return (
            <div className="typearea">
                <h2>{selectedType}</h2>
                <div>{selectedTypeArray.map(item => (<p key={item.id}>{item.description}</p>))}</div>
                <span className="collectBtn"><Link to={"/environment/" + selectedType + "/" + selectedType}>Check the collection</Link></span>
            </div>
        )
    }
}

export default RubbishType