const phrasearray  =[
  {
    phrase : 'You will face many defeats in life, but never let yourself be defeated.' ,
    who :'Maya Angelou'
  }
  ,
  {
    phrase : 'In the end, it’s not the years in your life that count. It’s the life in your years.' ,
    who :'Abraham Lincoln'
  }
  ,
  {
    phrase : 'Life is either a daring adventure or nothing at all.' ,
    who :'Helen Keller'
  }
  ,
  {
    phrase : 'Many of life’s failures are people who did not realize how close they were to success when they gave up.' ,
    who :'Thomas A. Edison'
  }
  ,
  {
    phrase : 'Despite the forecast, live like it’s spring.' ,
    who :'Lilly Pulitzer'
  }
  ,
  {
    phrase : 'There is always some madness in love. But there is also always some reason in madness.' ,
    who :'Friedrich Nietzsche'
  }
  ,{
    phrase : 'Love, free as air at sight of human ties, Spreads his light wings, and in a moment flies.' ,
    who :'Alexander Pope'
  }
  ,{
    phrase : 'Love asks me no questions, and gives me endless support.' ,
    who :'William Shakespeare'
  },
  {
    phrase : 'To love and win is the best thing. To love and lose, is the next best thing.' ,
    who :'William Thackeray'
  }
]

const phrase =document.querySelector('#phrase')
const who =document.querySelector('#who')
const randomnumber = Math.floor(Math.random()*phrasearray.length)
phrase.innerText = `"${phrasearray[randomnumber].phrase}"`
who.innerText =` - ${phrasearray[randomnumber].who} -`
