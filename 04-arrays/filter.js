const {getPeople} = require('./service')

async function main(){
    try{
        const {results} = await getPeople('a')
        const LarsFamily = results.filter(function(item){
            const result = item.name.toLowerCase().indexOf('lars') !== -1
            return result
        })

        const names = LarsFamily.map((item)=>item.name)
        console.log(names)
    }
    catch(error){
        console.error('error at filter', error)
    }
}

main()
