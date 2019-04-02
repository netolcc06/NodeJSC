const service = require('./service')

async function main(){
    try{
        const result = await service.getPeople('a')
        const names = []
        // for(let i=0; i< result.results.length; i++){
        //     const person = result.results[i]
        //     names.push(persolet i in result.resultsme)
        // }

        // for (let i in result.results) {
        //     const person = result.results[i]
        //     names.push(person.name)
        // }

        for(person of result.results){
            names.push(person.name)
        }
        console.log('names', names)
    }
    catch(error){
        console.error('error main', error)
    }
}

main()
