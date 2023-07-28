const fs = require('fs').promises

const readingDocument = async () => {
    try {
        const data = await fs.readFile('./pathToDatos/datos.txt', 'utf8')
        console.log(data)
    } catch (error) {
        console.error('Ocurrió un error mientras se leía el archivo:', error)
    }
}

readingDocument()
