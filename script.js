let apiQuotes = [];

//Showing new quote
function newQuote() {
  //Picking a random quote from the API Array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    // console.log(apiQuotes);
    newQuote();
  } catch (error) {
    // Catch errors here
  }
}

//On Loading
getQuotes();
