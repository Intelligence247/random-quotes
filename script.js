let quotes = {
    quote: [
        'God save me from my friends. I can protect myself from my enemies.',
        'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.',
        'Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we\'ve got',
        'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all',
        'The price of anything is the amount of life you exchange for it.',
        'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.'
    ],
    writers: [
        'Claude Louis Hector De Villars',
        'Charles Lindbergh',
        'Life',
        'John Kenneth Galbraith',
        'David Thoreau',
        'Tyne Daly'
    ]
}
console.log(quotes.writers.length, quotes.quote.length)
let btn = document.querySelector('button')
const qq = document.querySelector('#qq')
let author = document.querySelector('#author')
btn.addEventListener('click', () => {
    let rand = Math.floor(Math.random() * quotes.quote.length)
    qq.textContent = quotes.quote[rand]
    author.textContent = quotes.writers[rand]


})