import { readFile } from 'node:fs/promises'

async function fetchData() {
    try {
        const rawData = await readFile('./requests/userTweets.json')
        const data = JSON.parse(rawData)

        // Tweets:
        console.log(data.data.user.result['timeline_v2'].timeline.instructions[2].entries)

    } catch (error) {
        console.error('Error al leer el archivo:', error)
    }
}

fetchData();
