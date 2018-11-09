import React from 'react'
import { Link } from 'react-router-dom'

import data from '../../data/rubbishData'
const db = require('../../data/dataGet')

class RubbishData extends React.Component {
    render() {
        let rubbishType = this.props.match.params.item
        let rubbishCategory = this.props.match.params.category
        let singleRubbish = db.categorieItems(rubbishType).map((thing) => thing.item)
        console.log(singleRubbish)
        console.log("the thing is", rubbishType)
        /* console.log('rubbishdata page: ', data)
        console.log('rubbishType', rubbishType)


        console.log(db.categorieItems('Rubbish'))
        console.log(db.itemInfo('Nappies').description) */
        return (
            <div className="rubbishlist">
                <ul>
                    {db.categorieItems(rubbishType).map((thing) => {
                        console.log(thing.item, 'thing is ', thing)
                        return (/* (<li key={thing.id}><Link to="/">{thing.item}</Link></li>)) */
                            <li><Link to={'/environment/' + rubbishType + '/' + rubbishType + '/' + rubbishCategory}>{thing.item}
                            </Link></li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default RubbishData