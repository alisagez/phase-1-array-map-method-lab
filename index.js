const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



function titleCased() {
  const caps = tutorials.map(tutorial => { 
    //split method below splits each string into an array of substrings containing a single word; then those arrays are iterated to get the first character of each one to capitalize. then they are all joined back together.
    let words = tutorial.split(' ').map(word => {
      //slice method is ued to return each word's remainder after the first letter is capitalized
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return words.join(" ")
  })
  return caps
}

