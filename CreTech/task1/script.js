const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quoteBox = document.querySelector('.quote-box');

const quotes = [
  { body: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { body: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { body: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { body: "If you are working on something exciting, it will keep you motivated.", author: "Unknown" },
  { body: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { body: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  { body: "Dream bigger. Do bigger.", author: "Unknown" },
  { body: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { body: "Great things never come from comfort zones.", author: "Unknown" },
  { body: "Push yourself, because no one else is going to do it for you.", author: "Unknown" }
];

function generateQuote() {
  quoteBox.classList.add('fade');

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  setTimeout(() => {
    quoteText.textContent = `"${quote.body}"`;
    authorText.textContent = `— ${quote.author}`;
    quoteBox.classList.remove('fade');
  }, 300);
}

function shareTwitter() {
  const quote = quoteText.textContent;
  const author = authorText.textContent;
  const tweet = `${quote} ${author}`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  window.open(url, '_blank');
}

function shareFacebook() {
  const quote = quoteText.textContent;
  const author = authorText.textContent;
  const fbShare = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(quote + " " + author)}`;
  window.open(fbShare, '_blank');
}

window.onload = generateQuote;
