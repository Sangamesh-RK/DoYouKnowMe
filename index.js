let read = require('readline-sync');
let score = 0
questionBank = {
  // question:answer
  'Whats my fav color?': 'Blue',
  'Whats my fav food?': 'Pasta',
  'Whats my fav game?': 'Portal 2',
  'Whats my Valorant rank?': 'Gold 1',
  'Whats my fav number?': '10',
}
username = read.question('Whats your name? \n')
console.log('DO YOU KNOW ME?\n')
for (question in questionBank) {
  answer = questionBank[question]
  console.log(question + '\n')
  userAnswer = read.question('Answer: ')
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log('Correct!\n')
    score++
  } else {
    console.log('Incorrect!\n')
  }
}
console.log(username + ' Score: ' + score)