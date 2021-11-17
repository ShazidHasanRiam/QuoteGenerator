const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

//Showing Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
//Hide Loader
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}
//Showing new quote
function newQuote() {
  // loader
  loading();
  //Picking a random quote from the API Array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //check if there is no author
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  //Checking the  quote length to determine styling
  if (quote.text.lenght > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //Set quote, hide loader
  quoteText.textContent = quote.text;
  complete();
}
// Get Quotes From API
async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    // console.log(apiQuotes);
    newQuote();
  } catch (error) {
    // Catch the errors here
  }
}
//Tweet Quote Button
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}
// Event Listener
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
//On Loading
getQuotes();
