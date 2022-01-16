const quotes = [
  {text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  {text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  {text: "So many books, so little time.", author: "Frank Zappa" },
  {text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  {text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  {text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  {text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
  {text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  {text: "The most beautiful thing you can wear is confidence.", author: "Blake Lively" },
  {text: "If you’re presenting yourself with confidence, you can pull off pretty much anything.", author: "Katy Perry" }
]

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

const quotePicked = quotes[Math.floor(Math.random()*quotes.length)];
quoteElement.innerText = `"${quotePicked.text}"`;
authorElement.innerText = quotePicked.author;
