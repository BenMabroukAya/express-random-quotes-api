const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const quotes = [
        "Code is like humor. When you have to explain it, it’s bad.",
        "Talk is cheap. Show me the code. – Linus Torvalds",
        "It’s not a bug, it’s an undocumented feature.",
        "Why do we never have time to do it right, but always have time to do it over?",
        "First, solve the problem. Then, write the code.",
        "Programming is the art of telling another human what one wants the computer to do. – Donald Knuth",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
        "The best error message is the one that never shows up. – Thomas Fuchs",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. – Brian Kernighan",
        "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors. – Phil Karlton",
        "The most disastrous thing that you can ever learn is your first programming language. – Alan Kay",
        "If debugging is the process of removing bugs, then programming must be the process of putting them in. – Edsger Dijkstra",
];

app.get('/random-quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
