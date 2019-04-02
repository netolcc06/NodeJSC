const {getPeople} = require('./service.js')

Array.Prototype.myReduce = function(callback, initialValue){
    let finalValue = typeOf(initialValue) !== undefined ? initialValue : this[0]

    for(let index =0; index < this.length; i++){
        finalValue = callback(finalValue, this[index], this)
    }
    return finalValue;
}

async function main(){
    try{
        const {results} = await getPeople('a')
        const heights = results.map((item)=>parseInt(item.height))
        const total = heights.reduce((previous, next)=>{
            return previous + next
        })
        console.log(heights)
        console.log('total', total)
    }
    catch(error){
        console.error('error at reducing', error)
    }

}

main()
