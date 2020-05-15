const pattern = document.getElementById('pattern')
const incorrect = document.getElementById('incorrect')
const form = document.getElementById('main-form')
const letterRankings = document.getElementById('letter-rankings')
const wordRecommendations = document.getElementById('word-recommendations')

form.addEventListener('submit', event => { event.preventDefault(); solve() })

function getRE() {
    let lowerPattern = pattern.value.toLowerCase()
    let impossibleLetters = ''
    let wildRegexString
    matches = lowerPattern.match(/[^?]/g)
    if (matches) {
        impossibleLetters += matches.join('')
    }
    impossibleLetters += incorrect.value
    if (impossibleLetters) {
        wildRegexString = `([^${impossibleLetters}])`
    } else {
        wildRegexString = '([a-z])'
    }
    return new RegExp(`^${lowerPattern.replaceAll('?', wildRegexString)}$`)
}

function solve() {
    let missing = { 'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0 }
    let matchedWords = []
    let re = getRE()
    for (let word in words) {
        mo = word.match(re)
        if (mo) {
            matchedWords.push(mo[0])
            for (let i = 1; i < mo.length; i++) {  // start at 1 bc 0 is full match
                missing[mo[i]]++
            }

        }
    }
    let arr = Object.entries(missing).sort(function (a, b) {
        return b[1] - a[1]
    })

    if (matchedWords.length > 20) {
        wordRecommendations.innerText = `${matchedWords.length} words possible.`
    } else {
        wordRecommendations.innerText = `Possible words: ${matchedWords.join('\n').toUpperCase()}`
    }
    letterRankings.innerText = `Letter rankings: ${arr.join('\n').toUpperCase()}`
}