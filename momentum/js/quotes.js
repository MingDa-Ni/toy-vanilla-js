const quotes = [
{
  quote: "Laughter is timeless, Imagination has no age. And dreams are forever",
  author: "Walt Disney",
},
{
  quote: "The past can hurt, but the way I see it, you can either run from it or learn from it.",
  author: "Lion King",
},
{
  quote: "You must not let anyone define your limits because of where you come from. Your only limit is you soul.",
  author: "Ratatouille",
},
{
  quote: "Today's special moments are tomorrow's memories.",
  author: "Aladdin",
},
{
  quote: "Sometimes the smallest things take up the most room in your heart.",
  author: "Winnie the Pooh",
},
{
  quote: "It's not until you lose everything that you can truly appreciate everything",
  author: "Beauty and the beast",
},
{
  quote: "The only way to get what you want in this world is through hard work",
  author: "The princess and the Frog",
},
{
  quote: "Venture outside your comfort zone. The rewards are worth it.",
  author: "Tangled",
},
{
  quote: "Our fate lives within us, you only have to be brave enough to see it.",
  author: "Brave",
},
{
  quote: "You control your destiny. You don't need magic to do it.",
  author: "Brave"
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;