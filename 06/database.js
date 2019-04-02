const {
    readFile,
    writeFile
} = require('fs')
const {promisify} = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database{
    constructor(){
        this.filename = 'heroes.json'
    }
    async getDataFromFile(){
        const file = await readFileAsync(this.filename, 'utf8')
        return JSON.parse(file.toString())
    }
    async writeToFile(data){
        await writeFileAsync(this.filename, JSON.stringify(data))
        return true
    }

    async addItem(item){
        const data = await this.getDataFromFile();
        const id = item.id <=2 ? item.id : Date.now()

        const itemWithId = {
            id,
            ...item
        }

        const finalData = [
            ...data,
            itemWithId
        ]

        const result = await this.writeToFile(finalData)
        return result;
    }

    async list(id){
        const data = await this.getDataFromFile()
        const dataFiltered = data.filter(item => (id ? (item.id === id) : true))
        return dataFiltered;
    }

    async remove(id){
        if(!id){
            return await this.writeFile([])
        }

        const data = await this.getDataFromFile()
        const index = data.findIndex(item => item.id === parseInt(id))
        if(index===-1){
            throw Error('User not found')
        }
        data.splice(index, 1)
        return await this.writeToFile(data)

        return false;
  }

  async update(id, newData){
      const data = await this.getDataFromFile()
      const index = data.findIndex(item => item.id === parseInt(id))
      if(index === -1){
          throw Error('Hero does not exist')
      }

      const actual = data[index]
      const updatedObject = {
          ...actual,
          ...newData
      }

      data.splice(index, 1)

      return await this.writeToFile([
          ...data,
          updatedObject
      ])
      return false;
  }
}

module.exports = new Database()
