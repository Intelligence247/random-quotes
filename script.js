let quote = [
    'God save me from my friends. I can protect myself from my enemies.',
    'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.',
    'Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we\'ve got',
    'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all',
    'The price of anything is the amount of life you exchange for it.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur sint iste optio placeat dolor labore, reprehenderit ipsum aspernatur blanditiis maiores.',
    'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.'
]
let writer = [
    'Claude Louis Hector De Villars',
    'Charles Lindbergh',
    'Life',
    'John Kenneth Galbraith',
    'David Thoreau',
    '- Author',
    'Tyne Daly'
]
console.log(writer.length, quote.length)

let btn = document.querySelector('button')
const qq = document.querySelector('#qq')
let author = document.querySelector('#author')
btn.addEventListener('click', () => {
    let rand = Math.floor(Math.random() * quote.length)
    qq.textContent = quote[rand]
    author.textContent = writer[rand]


})