const fs = require('fs');
// Aufgabe 1

// Aufgabe 2
try {
  console.log('\n\n')
  console.log('------')
  console.log('Start Aufgabe 2')
  console.log('\n')

  const textFromFile = fs.readFileSync('./clear_smaller.txt', 'utf8')
  console.log('Text:', textFromFile)
  const foundNumbers = textFromFile.match(/[0-9]+/g).join().replace(/\,/g, '+')
  const calculatedSumFromFoundNumbers = textFromFile.match(/[0-9]+/g).map(x => +x).reduce((a,b) => a + b, 0)
  console.log('Summe aus Ziffern: ' + foundNumbers + ' = ' + calculatedSumFromFoundNumbers)

  console.log('Ende Aufgabe 2')
  console.log('------')
  console.log('\n')
} catch (err) {
  console.error('Error in exercise #1', err)
}

// Aufgabe 3
try {
  console.log('Start Aufgabe 3')
  const textFromFile = fs.readFileSync('./clear_smaller.txt', 'utf8')
  const foundAFromText = textFromFile.match(/a|A/g).length
  const foundEFromText = textFromFile.match(/e|E/g).length
  const foundIFromText = textFromFile.match(/i|I/g).length
  const foundOFromText = textFromFile.match(/o|O/g).length
  const foundUFromText = textFromFile.match(/u|U/g).length
  const calculatedSumFromFoundNumbers = textFromFile.match(/[0-9]+/g).map(x => +x).reduce((a,b) => a + b, 0)
  const newSum = calculatedSumFromFoundNumbers + (foundAFromText * 2) + (foundEFromText * 4) + (foundIFromText * 8) + (foundOFromText * 16) + (foundUFromText * 32)
  console.log('New calculated sum: ' + newSum)

  console.log('Ende Aufgabe 3')
  console.log('------')
} catch (err) {
  console.error('Error in exercise #3', err)
}

// Aufgabe 4
try {
  console.log('Start Aufgabe 4')
  const textFromFile = fs.readFileSync('./clear_smaller.txt', 'utf8')
  const sentences = textFromFile.split('.')
  let foundSums = []
  sentences.map(sentence => {
    console.log('\n')
    console.log('Text:' + sentence)
    const foundNumbers = sentence.match(/[0-9]+/g) ? sentence.match(/[0-9]+/g).join().replace(/\,/g, '+') : 0
    const calculatedSumFromFoundNumbers = sentence.match(/[0-9]+/g) ? sentence.match(/[0-9]+/g).map(x => +x).reduce((a,b) => a + b, 0) : 0
    console.log('Summe aus Ziffern: ' + foundNumbers + ' = ' + calculatedSumFromFoundNumbers)
    foundSums.push(calculatedSumFromFoundNumbers)
    console.log('\n')
  })

  console.log('------')
  console.log('\n')
  console.log('Start Aufgabe 4a')
  console.log('Gefundenen Summen:' + foundSums)
  console.log('\n')
  console.log('größte 3 Werte: ' + foundSums.sort((a,b) => b - a).slice(0, 3))
  console.log('Ende Aufgabe 4a')
  console.log('\n')
  console.log('Ende Aufgabe 4')
  console.log('\n')

} catch (err) {
  console.error('Error in exercise #3', err)
}

