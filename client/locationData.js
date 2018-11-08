

let locationsData = [
    {
        "location":"Aro Valley",
        "info":[
            {
                "type":"Rubbish",
                "frequency":"once a week",
                "day":"Wednesday",
                "time":"8:00",
            },
            {
                "type":"Recycling",
                "frequency":"each odd week",
                "day":"Wednesday",
                "time":"8:00",
            },
            {
                "type":"Glass",
                "frequency":"each even week",
                "day":"Wednesday",
                "time":"8:00",
            }
        ]
    },
    {
        "location":"Newtown",
        "info":[
            {
                "type":"Rubbish",
                "frequency":"once a week",
                "day":"Thursday",
                "time":"8:00",
            },
            {
                "type":"Recycling",
                "frequency":"each odd week",
                "day":"Thursday",
                "time":"8:00",
            },
            {
                "type":"Glass",
                "frequency":"each even week",
                "day":"Thursday",
                "time":"8:00",
            }
        ]
    },
    {
        "location":"Hataitai",
        "info":[
            {
                "type":"Rubbish",
                "frequency":"once a week",
                "day":"Friday",
                "time":"8:00",
            },
            {
                "type":"Recycling",
                "frequency":"each odd week",
                "day":"Friday",
                "time":"8:00",
            },
            {
                "type":"Glass",
                "frequency":"each even week",
                "day":"Friday",
                "time":"8:00",
            }
        ]
    }

]

let aFormat = {
    "location": "location",
    "info": "info",
    "type": "type",
    "timeDate": "day",
    "timeHour": "time",
    "frequency": "frequency"
}


function locationPickupTimes(locationName){
    let location = locationsData.find( (location)=> (location[aFormat.location]==locationName) );

    let times = location[aFormat.info].map( (info)=> {
        return {
            "type": info[aFormat.type],
            "when": (""+info[aFormat.timeDate] +" "+info[aFormat.timeHour]+" "+info[aFormat.frequency])
        }
    })


    //console.log(`for ${locationName} the times are `,times)
    return times;

}

function rubbishTypeTimes(typeName){
    let times = locationsData.map( (location)=> {
        let details = location[aFormat.info].find( (rubishType)=> {
            return (rubishType[aFormat.type] == typeName)
        })

        if(details) {
            details[aFormat.location] = location[aFormat.location]
            return details
        }
        else{
            return null;
        }
    })

    if (times.filter((entry)=> (entry ==null )).length == times.length){
        return null
    }

    //console.log(`the type ${typeName} is picked up based on`,times)
    return times;
}

module.exports = {
    locationPickupTimes,
    rubbishTypeTimes
}