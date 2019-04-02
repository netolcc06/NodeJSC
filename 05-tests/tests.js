const assert = require('assert')
const {getPeople} = require('./service')

//assert.ok(false)

describe('Star Wars Tests', function(){
    it('Get r2d2', async()=>{
        const expected = [
          {name:'R2-D2',
          height:'96'}
        ]
        const baseName = `r2-d2`
        const result = await getPeople(baseName)
        assert.deepEqual(result, expected)
    })
})
