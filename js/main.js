var arrOfQuotes=[
    {
        'author':'Frank Zappa' ,
        'quote':'So many books, so little time.' 

    },
    {
        'author':'Mahatma Gandhi' ,
        'quote':'Be the change that you wish to see in the world.'
    },
    {
        'author':'Maya Angelou',
        'quote':'I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'
    },
    {
        'author': 'Mahatma Gandhi',
        'quote':'Live as if you were to die tomorrow. Learn as if you were to live forever'
    },
    {
        'author':  'Albert Camus',
        'quote':'Do not walk in front of me… I may not follow Do not walk behind me… I may not lead Walk beside me… just be my friend'
    },
    {
        'author': 'Mark Twain',
        'quote':'Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).'
    }
];
function generatQuote(){

    var randomQuote = Number.parseInt(Math.random()* arrOfQuotes.length + 1)

    document.getElementById("quoteOutput").innerHTML = '"'+arrOfQuotes[randomQuote].quote+'"';
    document.getElementById("quoteAuthor").innerHTML = "--"+arrOfQuotes[randomQuote].author;
}
