const {deepEqual, ok} = require('assert')

const database = require('./database')

const DEFAULT_ITEM = {
    name : 'Flash',
    power: 'speed',
    id: 1
}

const CUSTOM_ITEM = {
    name : 'Green Lantern',
    power: 'ring',
    id: 2
}

describe('Suite for heroes manipulation', ()=>{
    before(async()=>{
        await database.addItem(DEFAULT_ITEM)
        await database.addItem(CUSTOM_ITEM)
    })
    it('must read a hero from file',async ()=>{
        const expected = DEFAULT_ITEM
        const [result] = await database.list(expected.id);//filter always return an array
        deepEqual(result, expected)
    })
    it('storage a hero via file', async()=>{
        const expected = DEFAULT_ITEM
        const result = await database.addItem(expected)
        const [actual] = await database.list(expected.id)
        deepEqual(actual, expected)
    })
    it('remove hero by id', async()=>{
        const expected = true;
        const result = await database.remove(DEFAULT_ITEM.id)
        deepEqual(result, expected)
    })
    it('updates hero by id', async()=>{
        const expected = {
            ...CUSTOM_ITEM,
            name: 'Batman',
            power: 'money'
        }

        newData = {
          name: 'Batman',
          power: 'money'
        }

        await database.update(CUSTOM_ITEM.id, newData)
        const [result] = await database.list(CUSTOM_ITEM.id)

        deepEqual(result, expected)
    })
})
