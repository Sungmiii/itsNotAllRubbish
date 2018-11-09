import React from 'react'

import data from '../../data/rubbishData'
const db = require('../../data/dataGet')

class RubbishCategory extends React.Component {
    render() {
        let rubbishType = this.props.match.params.item
        let rubbishCategory = this.props.match.params.category
        let singleRubbish = db.categorieItems(rubbishType).map((thing) => thing.item)
        console.log(singleRubbish.map(item => item[0]))
        return (
            <div className="itemInfo">
                <h3>{rubbishCategory}</h3>
                {db.itemInfo(rubbishCategory).description}<br />
                {db.itemInfo(rubbishCategory).instruction.map((string) => (<p>{string}</p>))}
            </div>
        )
    }
}

export default RubbishCategory