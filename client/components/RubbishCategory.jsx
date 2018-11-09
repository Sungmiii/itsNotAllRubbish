import React from 'react'

import data from '../../data/rubbishData'
const db = require('../../data/dataGet')

class RubbishCategory extends React.Component {
    render() {

        return (
            <div className="itemInfo">
                <p>RubbishCategory</p>
                {db.itemInfo('Nappies').description}
            </div>
        )
    }
}

export default RubbishCategory