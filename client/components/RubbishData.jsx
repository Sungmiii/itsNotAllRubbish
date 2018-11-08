import React from 'react'
import Link from 'react-router-dom'

import data from '../../data/rubbishData'
const db = require('../../data/dataGet')

class RubbishData extends React.Component {
    render() {
        let rubbishType = this.props.match.params.item
        console.log('rubbishdata page: ', data)
        console.log('rubbishType', rubbishType)


        console.log(db.categorieItems('Rubbish'))
        console.log(db.itemInfo('Nappies').description)
        return (
            <div className="rubbishlist">
                <ul>
                    {db.categorieItems(rubbishType).map((thing) => <li key={thing.id}>{thing.item}</li>)}
                </ul>
            </div>
        )
    }
}

export default RubbishData