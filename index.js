import { readFile } from 'node:fs/promises'

async function fetchData() {
    try {
        const rawData = await readFile('./requests/userTweets.json')
        const data = JSON.parse(rawData)

        // Tweets:
        const tweets = data.data.user.result['timeline_v2'].timeline.instructions[2].entries
        const lastTweet = tweets[0]

        console.log(lastTweet.content.itemContent['tweet_results'].result.legacy['full_text']) // The PRO™ move here would be to do it with CSS alone

    } catch (error) {
        console.error('Error al leer el archivo:', error)
    }
}

fetchData();
