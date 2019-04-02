const {get} = require('axios')

const URL = `https://swapi.co/api/people`

async function getPeople(name){
    try{
        const url = `${URL}/?search=${name}&format=json`
        const result = await get(url)
        return result.data.results.map(mapPeople)
    }
    catch(error){}
}

function mapPeople(item){
    return{
        name: item.name,
        height: item.height
    }
}

module.exports = {getPeople}
