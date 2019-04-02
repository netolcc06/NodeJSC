const service = require('./service')

async function main(){
    try{
        const results = await service.getPeople('a')
        //const names = []
        // results.results.forEach(function(item){
        //     names.push(item.name)
        // })

        // const names = results.results.map(function(person){
        //     return person.name
        // })

        const names = results.results.map((person)=>person.name)
        console.log('names', names)
    }
    catch(error){
        console.error('error', error)
    }
}

main()
