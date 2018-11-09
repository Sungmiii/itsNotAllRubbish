const db = require('../data/dataGet')

test ('Test data categories list', () => {
    const expected = 3
    const actual = db.categorieInfo().length

    expect(actual).toBe(expected)
} )


test ('Test item info get', () => {
    const expected = "Egg cartons"
    const actual = db.itemInfo('Egg cartons').item

    expect(actual).toBe(expected)
} )



test ('Test for missing item', () => {
    //const expected = "abcdef"
    const actual = db.itemInfo('abcdefg')

    expect(actual).toBeUndefined()
} )