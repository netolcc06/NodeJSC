const commander = require('commander')
const database = require('./database')

async function main(){
    commander
        .version('v1')
        .option('-n, --nome [value]', 'Hero name')
        .option('-p, --power [value]', 'Hero power')
        .option('-c, --addItem', 'Add a hero')
        .parse(process.argv)
        try{

        }
        catch(error){
            console.error('error at commander', error)
        }
}

main()
