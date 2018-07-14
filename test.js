// Complete the encode function below.
const numberPhrase = /\d\d+/g
const punctuation = /[\\/{}:;'"|.!><?!@#$,%^&*()\-_=+`~/\d]/
const replaceChar = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
  y: ' ',
  ' ': 'y',
}

const shiftConsonant = con =>
  String.fromCharCode(con.charCodeAt(0) - 1)

const skipPunctuation = char =>
  punctuation.test(char) && char

const arrayReverse = str => str.split('').reverse().join('')

const reverse = numMatch => {
  const { input, index } = numMatch
  const [ num ] = numMatch
  
  const working = Array.from(input) 
  working.splice(index, num.length, arrayReverse(num))
  return working.join('')   
}

const processNumPhrases = str => {
  let num = []
  
  while (num = numberPhrase.exec(str)) {
    str = reverse(num)
  }
  
  return str.split('')
}

const encode = stringToEncode =>
  processNumPhrases(stringToEncode.toLowerCase())
    .map(i => replaceChar[i] || skipPunctuation(i) || shiftConsonant(i))
    .join('')
